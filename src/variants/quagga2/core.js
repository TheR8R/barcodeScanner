import { createQuaggaBarcodeScanner } from './barcodeScanner.js';
import { createQRScanner } from './qrScanner.js';

// Shared Quagga2 scanner variant orchestrator.
// This module coordinates barcode + QR scanners and lifecycle timing.
export function createQuagga2ScannerVariant(config = {}) {
    const qrStartDelayMs = config.qrStartDelayMs ?? 1000;   // Delay before enabling the QR scanner after Quagga has started.
    const variantLabel = config.label ?? 'default';         // Label used only for logs to identify the current variant.
    
    // Dedicated config object for barcode scanner settings.
    const barcodeScannerConfig = {
        frequency: config.frequency,
        width: config.width,
        height: config.height,
        maxWorkers: config.maxWorkers,
        readers: config.readers,
        locate: config.locate,
        patchSize: config.patchSize,
        halfSample: config.halfSample,
        facingMode: config.facingMode,
        useQuaggaOverlay: config.useQuaggaOverlay,
        area: config.area
    };

    // Dedicated config object for QR scanner settings.
    const qrScannerConfig = {
        scanIntervalMs: config.qrScanIntervalMs,
        overlayColor: config.qrOverlayColor,
        resolveVideoElement: config.resolveVideoElement
    };

    const barcodeScanner = createQuaggaBarcodeScanner(barcodeScannerConfig);
    const qrScanner = createQRScanner(qrScannerConfig);

    let isRunning = false;
    let isStarting = false;
    let qrStartTimeout = null;

    function start(container, onSuccess, onError) {
        if (isRunning || isStarting) {
            return;
        }

        isStarting = true;

        barcodeScanner.start(container, () => {
            qrStartTimeout = setTimeout(() => {
                if (!isRunning) {
                    isStarting = false;
                    return;
                }
                qrScanner.start(container);
            }, qrStartDelayMs);

            isRunning = true;
            isStarting = false;
            if (onSuccess) onSuccess();
            console.log(`Quagga2 scanner variant started (${variantLabel})`);
        }, (error) => {
            isStarting = false;
            if (onError) onError(error);
        });
    }

    function stop() {
        if (qrStartTimeout) {
            clearTimeout(qrStartTimeout);
            qrStartTimeout = null;
        }

        barcodeScanner.stop();
        qrScanner.stop();
        isRunning = false;
        isStarting = false;
        console.log(`Quagga2 scanner variant stopped (${variantLabel})`);
    }

    return { start, stop };
}
