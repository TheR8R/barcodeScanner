// Barcode scanner module using Quagga2
let isRunning = false;
let lastDrawTime = 0;
const DRAW_INTERVAL = 300; // Minimum ms between overlay updates (reduced for more responsive feedback)

function startBarcodeScanner(containerElement, onSuccess, onError) {
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: containerElement,
            constraints: {
                width: { ideal: 1280 },
                height: { ideal: 720 },
                facingMode: "environment" // Use rear camera on mobile
            },
            area: { // Scan a larger area of the frame
                top: "0%",
                right: "0%",
                left: "0%",
                bottom: "0%"
            }
        },
        frequency: 10, // Process frames more frequently
        numOfWorkers: navigator.hardwareConcurrency ? Math.min(navigator.hardwareConcurrency, 2) : 1,
        decoder: {
            readers: [
                "code_128_reader"
            ]
        },
        locate: true,
        locator: {
            patchSize: "medium", // Adjust patch size for better detection
            halfSample: false // Don't downsample for better quality
        }
    }, function(err) {
        if (err) {
            console.error("Quagga initialization failed:", err);
            if (onError) onError(err);
            return;
        }
        
        // iOS Safari requires playsinline to prevent fullscreen video
        const video = containerElement.querySelector('video');
        if (video) {
            video.setAttribute('playsinline', true);
            video.setAttribute('webkit-playsinline', true);
        }
        
        console.log("Quagga initialization succeeded");
        Quagga.start();
        isRunning = true;
        
        if (onSuccess) onSuccess();
    });

    // Draw visual overlay on detection (throttled to save resources)
    Quagga.onProcessed(function(result) {
        const now = Date.now();
        
        // Throttle drawing to save resources
        if (now - lastDrawTime < DRAW_INTERVAL) {
            return;
        }
        lastDrawTime = now;
        
        const drawingCtx = Quagga.canvas.ctx.overlay;
        const drawingCanvas = Quagga.canvas.dom.overlay;

        // Always clear the canvas first
        if (drawingCtx && drawingCanvas) {
            drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
        }

        if (result) {
            // Draw all detection boxes in blue
            if (result.boxes) {
                result.boxes.filter(function (box) {
                    return box !== result.box;
                }).forEach(function (box) {
                    Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "blue", lineWidth: 2});
                });
            }

            // Draw the best detection box in green
            if (result.box) {
                Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
            }

            // Draw the barcode line in red when detected
            if (result.codeResult && result.codeResult.code) {
                Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
            }
        }
    });

    // Handle detected barcodes with confirmation mechanism
    Quagga.onDetected(function(result) {
        const code = result.codeResult.code;
        const format = result.codeResult.format;
        const scanKey = `${code}-${format}`;
        
        const state = window.scannerState;
        
        // Check if already scanned recently
        if (state.scannedCodes.has(scanKey)) {
            return;
        }
        
        // Confirmation mechanism: require multiple detections
        if (!state.detectionBuffer.has(scanKey)) {
            // First detection - add to buffer
            state.detectionBuffer.set(scanKey, {
                count: 1,
                timeout: setTimeout(() => {
                    state.detectionBuffer.delete(scanKey);
                }, state.BUFFER_TIMEOUT)
            });
            console.log(`First barcode detection: ${code}`);
            return;
        }
        
        // Subsequent detection
        const detection = state.detectionBuffer.get(scanKey);
        detection.count++;
        
        // Clear the timeout and set a new one
        clearTimeout(detection.timeout);
        detection.timeout = setTimeout(() => {
            state.detectionBuffer.delete(scanKey);
        }, state.BUFFER_TIMEOUT);
        
        // If we've reached confirmation threshold, accept the barcode
        if (detection.count >= state.CONFIRMATION_THRESHOLD) {
            // Clear from buffer
            clearTimeout(detection.timeout);
            state.detectionBuffer.delete(scanKey);
            
            // Add to scanned codes to prevent immediate re-scanning
            state.scannedCodes.add(scanKey);
            setTimeout(() => state.scannedCodes.delete(scanKey), 2000);
            
            // Add barcode to chat
            state.addBarcodeToChat(code, format);
            
            // Play beep sound
            state.playBeep();
            
            console.log(`Confirmed barcode: ${code}`);
        } else {
            console.log(`Barcode detection ${detection.count}/${state.CONFIRMATION_THRESHOLD}: ${code}`);
        }
    });
}

function stopBarcodeScanner() {
    if (isRunning) {
        Quagga.stop();
        isRunning = false;
        console.log('Barcode scanner stopped');
    }
}

// Export functions to global scope
window.BarcodeScanner = {
    start: startBarcodeScanner,
    stop: stopBarcodeScanner
};
