import { getScannerState } from '../scannerContext.js';

// Configurable jsQR scanner factory that uses Quagga's video element
export function createQuaggaQRScanner(config = {}) {
    let qrScanInterval = null;
    let qrCanvas = null;
    let qrContext = null;
    let videoElement = null;

    const scanIntervalMs = config.scanIntervalMs ?? 300;
    const overlayColor = config.overlayColor ?? 'purple';

    function resolveVideoElement(containerElement) {
        if (typeof config.resolveVideoElement === 'function') {
            return config.resolveVideoElement(containerElement);
        }
        return containerElement.querySelector('video');
    }

    function drawQROverlay(location) {
        const drawingCtx = Quagga.canvas?.ctx?.overlay;
        if (!drawingCtx) return;

        drawingCtx.beginPath();
        drawingCtx.moveTo(location.topLeftCorner.x, location.topLeftCorner.y);
        drawingCtx.lineTo(location.topRightCorner.x, location.topRightCorner.y);
        drawingCtx.lineTo(location.bottomRightCorner.x, location.bottomRightCorner.y);
        drawingCtx.lineTo(location.bottomLeftCorner.x, location.bottomLeftCorner.y);
        drawingCtx.lineTo(location.topLeftCorner.x, location.topLeftCorner.y);
        drawingCtx.lineWidth = 3;
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

        drawQROverlay(code.location);

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
    }

    function stop() {
        if (qrScanInterval) {
            clearInterval(qrScanInterval);
            qrScanInterval = null;
            console.log('Quagga QR scanner stopped');
        }
    }

    return { start, stop };
}
