import { createQuaggaBarcodeScanner } from './barcodeScanner.js';
import { createQuaggaQRScanner } from './qrScanner.js';

// Shared Quagga2 scanner variant core
export function createQuagga2ScannerVariant(config = {}) {
    const barcodeScanner = createQuaggaBarcodeScanner({
        drawIntervalMs: config.drawIntervalMs,
        frequency: config.frequency,
        width: config.width,
        height: config.height,
        maxWorkers: config.maxWorkers,
        readers: config.readers,
        locate: config.locate,
        patchSize: config.patchSize,
        halfSample: config.halfSample
    });

    const qrScanner = createQuaggaQRScanner({
        scanIntervalMs: config.qrScanIntervalMs,
        overlayColor: config.qrOverlayColor,
        resolveVideoElement: config.resolveVideoElement
    });

    const qrStartDelayMs = config.qrStartDelayMs ?? 1000;
    const variantLabel = config.label ?? 'default';

    let isRunning = false;
    let qrStartTimeout = null;

    function start(container, onSuccess, onError) {
        barcodeScanner.start(container, () => {
            qrStartTimeout = setTimeout(() => {
                qrScanner.start(container);
            }, qrStartDelayMs);

            isRunning = true;
            if (onSuccess) onSuccess();
            console.log(`Quagga2 scanner variant started (${variantLabel})`);
        }, onError);
    }

    function stop() {
        if (qrStartTimeout) {
            clearTimeout(qrStartTimeout);
            qrStartTimeout = null;
        }

        if (isRunning) {
            barcodeScanner.stop();
            qrScanner.stop();
            isRunning = false;
            console.log(`Quagga2 scanner variant stopped (${variantLabel})`);
        }
    }

    return { start, stop };
}
