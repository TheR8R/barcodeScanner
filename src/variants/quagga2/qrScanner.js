import { getScannerState } from '../scannerContext.js';

// Configurable jsQR scanner factory that uses Quagga's video element
export function createQuaggaQRScanner(config = {}) {
    let qrScanInterval = null;
    let qrCanvas = null;
    let qrContext = null;
    let videoElement = null;
    let processedHandler = null;
    let lastDetectedLocation = null;
    let lastDetectedVideoWidth = 0;
    let lastDetectedVideoHeight = 0;
    let lastDetectedAt = 0;

    const scanIntervalMs = config.scanIntervalMs ?? 300;
    const overlayColor = config.overlayColor ?? 'purple';
    const overlayPersistenceMs = config.overlayPersistenceMs ?? 450;

    function resolveVideoElement(containerElement) {
        if (typeof config.resolveVideoElement === 'function') {
            return config.resolveVideoElement(containerElement);
        }
        return containerElement.querySelector('video');
    }

    function drawQROverlay(location, sourceWidth, sourceHeight) {
        const drawingCtx = Quagga.canvas?.ctx?.overlay;
        const drawingCanvas = Quagga.canvas?.dom?.overlay;
        if (!drawingCtx || !drawingCanvas) return;

        const overlayWidthAttr = parseInt(drawingCanvas.getAttribute('width'), 10);
        const overlayHeightAttr = parseInt(drawingCanvas.getAttribute('height'), 10);

        const overlayWidth = Number.isFinite(overlayWidthAttr) ? overlayWidthAttr : drawingCanvas.width;
        const overlayHeight = Number.isFinite(overlayHeightAttr) ? overlayHeightAttr : drawingCanvas.height;

        const scaleX = sourceWidth > 0 ? overlayWidth / sourceWidth : 1;
        const scaleY = sourceHeight > 0 ? overlayHeight / sourceHeight : 1;

        const topLeft = {
            x: location.topLeftCorner.x * scaleX,
            y: location.topLeftCorner.y * scaleY
        };
        const topRight = {
            x: location.topRightCorner.x * scaleX,
            y: location.topRightCorner.y * scaleY
        };
        const bottomRight = {
            x: location.bottomRightCorner.x * scaleX,
            y: location.bottomRightCorner.y * scaleY
        };
        const bottomLeft = {
            x: location.bottomLeftCorner.x * scaleX,
            y: location.bottomLeftCorner.y * scaleY
        };

        drawingCtx.beginPath();
        drawingCtx.moveTo(topLeft.x, topLeft.y);
        drawingCtx.lineTo(topRight.x, topRight.y);
        drawingCtx.lineTo(bottomRight.x, bottomRight.y);
        drawingCtx.lineTo(bottomLeft.x, bottomLeft.y);
        drawingCtx.lineTo(topLeft.x, topLeft.y);
        drawingCtx.lineWidth = 4;
        drawingCtx.strokeStyle = overlayColor;
        drawingCtx.stroke();
    }

    function handleQRDetection(code) {
        const state = getScannerState();
        const qrData = code.data;
        const scanKey = `${qrData}-qr_code`;

        if (state.scannedCodes.has(scanKey)) {
            return;
        }

        lastDetectedLocation = code.location;
        lastDetectedVideoWidth = qrCanvas?.width ?? videoElement?.videoWidth ?? 0;
        lastDetectedVideoHeight = qrCanvas?.height ?? videoElement?.videoHeight ?? 0;
        lastDetectedAt = Date.now();

        drawQROverlay(lastDetectedLocation, lastDetectedVideoWidth, lastDetectedVideoHeight);

        if (!state.detectionBuffer.has(scanKey)) {
            state.detectionBuffer.set(scanKey, {
                count: 1,
                timeout: setTimeout(() => {
                    state.detectionBuffer.delete(scanKey);
                }, state.bufferTimeout)
            });
            return;
        }

        const detection = state.detectionBuffer.get(scanKey);
        detection.count++;

        clearTimeout(detection.timeout);
        detection.timeout = setTimeout(() => {
            state.detectionBuffer.delete(scanKey);
        }, state.bufferTimeout);

        if (detection.count >= state.confirmationThreshold) {
            clearTimeout(detection.timeout);
            state.detectionBuffer.delete(scanKey);

            state.scannedCodes.add(scanKey);
            setTimeout(() => state.scannedCodes.delete(scanKey), 2000);

            state.addBarcodeToChat(qrData, 'QR_CODE');
            state.playBeep();
        }
    }

    function start(containerElement) {
        videoElement = resolveVideoElement(containerElement);
        if (!videoElement) {
            console.error('Video element not found');
            return;
        }

        qrCanvas = document.createElement('canvas');
        qrContext = qrCanvas.getContext('2d', { willReadFrequently: true });

        qrScanInterval = setInterval(() => {
            if (videoElement.readyState !== videoElement.HAVE_ENOUGH_DATA) {
                return;
            }

            if (qrCanvas.height !== videoElement.videoHeight || qrCanvas.width !== videoElement.videoWidth) {
                qrCanvas.height = videoElement.videoHeight;
                qrCanvas.width = videoElement.videoWidth;
            }
            qrContext.drawImage(videoElement, 0, 0, qrCanvas.width, qrCanvas.height);

            const imageData = qrContext.getImageData(0, 0, qrCanvas.width, qrCanvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: 'dontInvert'
            });

            if (code) {
                handleQRDetection(code);
            }
        }, scanIntervalMs);

        processedHandler = function () {
            if (!lastDetectedLocation) {
                return;
            }

            if (Date.now() - lastDetectedAt > overlayPersistenceMs) {
                lastDetectedLocation = null;
                return;
            }

            drawQROverlay(lastDetectedLocation, lastDetectedVideoWidth, lastDetectedVideoHeight);
        };

        Quagga.onProcessed(processedHandler);
    }

    function stop() {
        if (processedHandler && typeof Quagga.offProcessed === 'function') {
            Quagga.offProcessed(processedHandler);
            processedHandler = null;
        }

        if (qrScanInterval) {
            clearInterval(qrScanInterval);
            qrScanInterval = null;
            console.log('Quagga QR scanner stopped');
        }

        lastDetectedLocation = null;
        lastDetectedAt = 0;
        lastDetectedVideoWidth = 0;
        lastDetectedVideoHeight = 0;
    }

    return { start, stop };
}
