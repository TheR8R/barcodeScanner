import { confirmScanCandidate, emitDetectedCode } from '../scannerContext.js';
import { drawQROverlay } from './drawing.js';

// Configurable jsQR scanner factory that uses Quagga's video element
export function createQRScanner(config = {}) {
    let isRunning = false;
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

    function handleQRDetection(code) {
        const qrData = code.data;
        const scanKey = `${qrData}-qr_code`;

        lastDetectedLocation = code.location;
        lastDetectedVideoWidth = qrCanvas?.width ?? videoElement?.videoWidth ?? 0;
        lastDetectedVideoHeight = qrCanvas?.height ?? videoElement?.videoHeight ?? 0;
        lastDetectedAt = Date.now();

        drawQROverlay(lastDetectedLocation, lastDetectedVideoWidth, lastDetectedVideoHeight, overlayColor);

        confirmScanCandidate(scanKey, () => {
            emitDetectedCode(qrData, 'QR_CODE');
        });
    }

    function start(containerElement) {
        if (isRunning) {
            return;
        }

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

            drawQROverlay(lastDetectedLocation, lastDetectedVideoWidth, lastDetectedVideoHeight, overlayColor);
        };

        Quagga.onProcessed(processedHandler);
        isRunning = true;
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
        qrContext = null;
        qrCanvas = null;
        videoElement = null;
        isRunning = false;
    }

    return { start, stop };
}
