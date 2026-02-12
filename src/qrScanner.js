// QR code scanning module
let qrScanInterval = null;
let qrCanvas = null;
let qrContext = null;
let videoElement = null;

function startQRScanner() {
    // Get video element from Quagga
    videoElement = document.querySelector('#scanner-container video');
    if (!videoElement) {
        console.error('Video element not found');
        return;
    }

    // Create canvas for QR code detection
    qrCanvas = document.createElement('canvas');
    qrContext = qrCanvas.getContext('2d');

    // Start QR scanning loop
    qrScanInterval = setInterval(() => {
        if (videoElement.readyState === videoElement.HAVE_ENOUGH_DATA) {
            qrCanvas.height = videoElement.videoHeight;
            qrCanvas.width = videoElement.videoWidth;
            qrContext.drawImage(videoElement, 0, 0, qrCanvas.width, qrCanvas.height);
            
            const imageData = qrContext.getImageData(0, 0, qrCanvas.width, qrCanvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: "dontInvert",
            });

            if (code) {
                handleQRDetection(code);
            }
        }
    }, 300); // Scan for QR codes every 300ms

    console.log('QR Scanner started');
}

function handleQRDetection(code) {
    const qrData = code.data;
    const scanKey = `${qrData}-qr_code`;
    
    // Check if already scanned recently (using shared state)
    if (window.scannerState.scannedCodes.has(scanKey)) {
        return;
    }
    
    // Draw QR code overlay
    drawQROverlay(code.location);
    
    // Confirmation mechanism: require multiple detections
    if (!window.scannerState.detectionBuffer.has(scanKey)) {
        window.scannerState.detectionBuffer.set(scanKey, {
            count: 1,
            timeout: setTimeout(() => {
                window.scannerState.detectionBuffer.delete(scanKey);
            }, window.scannerState.BUFFER_TIMEOUT)
        });
        console.log(`First QR detection: ${qrData}`);
        return;
    }
    
    const detection = window.scannerState.detectionBuffer.get(scanKey);
    detection.count++;
    
    clearTimeout(detection.timeout);
    detection.timeout = setTimeout(() => {
        window.scannerState.detectionBuffer.delete(scanKey);
    }, window.scannerState.BUFFER_TIMEOUT);
    
    if (detection.count >= window.scannerState.CONFIRMATION_THRESHOLD) {
        clearTimeout(detection.timeout);
        window.scannerState.detectionBuffer.delete(scanKey);
        
        window.scannerState.scannedCodes.add(scanKey);
        setTimeout(() => window.scannerState.scannedCodes.delete(scanKey), 2000);
        
        window.scannerState.addBarcodeToChat(qrData, 'QR_CODE');
        window.scannerState.playBeep();
        
        console.log(`Confirmed QR code: ${qrData}`);
    } else {
        console.log(`QR Detection ${detection.count}/${window.scannerState.CONFIRMATION_THRESHOLD}: ${qrData}`);
    }
}

function drawQROverlay(location) {
    const drawingCtx = Quagga.canvas.ctx.overlay;
    if (!drawingCtx) return;
    
    // Draw QR code outline in purple (don't clear - barcode scanner handles clearing)
    drawingCtx.beginPath();
    drawingCtx.moveTo(location.topLeftCorner.x, location.topLeftCorner.y);
    drawingCtx.lineTo(location.topRightCorner.x, location.topRightCorner.y);
    drawingCtx.lineTo(location.bottomRightCorner.x, location.bottomRightCorner.y);
    drawingCtx.lineTo(location.bottomLeftCorner.x, location.bottomLeftCorner.y);
    drawingCtx.lineTo(location.topLeftCorner.x, location.topLeftCorner.y);
    drawingCtx.lineWidth = 3;
    drawingCtx.strokeStyle = 'purple';
    drawingCtx.stroke();
}

function stopQRScanner() {
    if (qrScanInterval) {
        clearInterval(qrScanInterval);
        qrScanInterval = null;
        console.log('QR Scanner stopped');
    }
}

// Export functions to global scope
window.QRScanner = {
    start: startQRScanner,
    stop: stopQRScanner
};
