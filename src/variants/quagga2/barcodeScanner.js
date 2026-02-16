import { getScannerState } from '../scannerContext.js';

// Configurable Quagga2 barcode scanner factory
export function createQuaggaBarcodeScanner(config = {}) {
    let isRunning = false;
    let lastDrawTime = 0;
    let processedHandler = null;
    let detectedHandler = null;

    const drawIntervalMs = config.drawIntervalMs ?? 120;   // Minimum delay between overlay redraws.
    const frequency = config.frequency ?? 10;               // Max processed frames per second. Lower values reduce CPU usage.
    const idealWidth = config.width ?? 1280;                // Preferred camera capture width (ideal MediaTrack constraint).
    const idealHeight = config.height ?? 720;               // Preferred camera capture height (ideal MediaTrack constraint).
    const maxWorkers = config.maxWorkers ?? 2;              // Upper limit for web workers used by Quagga.
    const readers = config.readers ?? ['code_128_reader'];  // Barcode decoders Quagga will try, in order.
    const locate = config.locate ?? true;                   // Enables barcode localization before decoding.
    const patchSize = config.patchSize ?? 'medium';         // Locator search grid size: smaller is slower but better for small barcodes.
    const halfSample = config.halfSample ?? false;          // Downsample image by 50% before localization for speed.
    const facingMode = config.facingMode ?? 'environment';  // Camera preference for back camera on phones/tablets.

    // Create Quagga overlay canvas so we can draw detection guides.
    const useQuaggaOverlay = config.useQuaggaOverlay ?? true;

    // Scan area crop percentages (0% = full frame).
    const scanAreaTop = config.scanAreaTop ?? '0%';
    const scanAreaRight = config.scanAreaRight ?? '0%';
    const scanAreaLeft = config.scanAreaLeft ?? '0%';
    const scanAreaBottom = config.scanAreaBottom ?? '0%';

    function buildInputStreamConfig(containerElement) {
        return {
            name: 'Live',
            type: 'LiveStream',
            target: containerElement,
            constraints: {
                width: { ideal: idealWidth },
                height: { ideal: idealHeight },
                facingMode
            },
            area: {
                top: scanAreaTop,
                right: scanAreaRight,
                left: scanAreaLeft,
                bottom: scanAreaBottom
            }
        };
    }

    function getNumOfWorkers() {
        return navigator.hardwareConcurrency
            ? Math.min(navigator.hardwareConcurrency, maxWorkers)
            : 1;
    }

    function buildDecoderConfig() {
        return { readers };
    }

    function buildLocatorConfig() {
        return {
            patchSize,
            halfSample
        };
    }

    function buildQuaggaConfig(containerElement) {
        return {
            inputStream: buildInputStreamConfig(containerElement),
            frequency,
            numOfWorkers: getNumOfWorkers(),
            decoder: buildDecoderConfig(),
            locate,
            locator: buildLocatorConfig(),
            canvas: {
                createOverlay: useQuaggaOverlay
            }
        };
    }

    function clearOverlayCanvas() {
        const drawingCtx = Quagga.canvas?.ctx?.overlay;
        const drawingCanvas = Quagga.canvas?.dom?.overlay;

        if (!drawingCtx || !drawingCanvas) {
            return;
        }

        const width = parseInt(drawingCanvas.getAttribute('width'), 10);
        const height = parseInt(drawingCanvas.getAttribute('height'), 10);

        if (Number.isFinite(width) && Number.isFinite(height)) {
            drawingCtx.clearRect(0, 0, width, height);
            return;
        }

        drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
    }

    function start(containerElement, onSuccess, onError) {
        Quagga.init(buildQuaggaConfig(containerElement), function (err) {
            if (err) {
                console.error('Quagga initialization failed:', err);
                if (onError) onError(err);
                return;
            }

            const video = containerElement.querySelector('video');
            if (video) {
                video.setAttribute('playsinline', true);
                video.setAttribute('webkit-playsinline', true);
            }

            Quagga.start();
            isRunning = true;
            if (onSuccess) onSuccess();
        });

        processedHandler = function (result) {
            if (!useQuaggaOverlay) {
                return;
            }

            const now = Date.now();
            if (now - lastDrawTime < drawIntervalMs) {
                return;
            }
            lastDrawTime = now;

            const drawingCtx = Quagga.canvas?.ctx?.overlay;
            if (!drawingCtx) {
                return;
            }

            clearOverlayCanvas();

            if (!result) {
                return;
            }

            if (result.boxes) {
                result.boxes
                    .filter((box) => box !== result.box)
                    .forEach((box) => {
                        Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: 'blue', lineWidth: 4 });
                    });
            }

            if (result.box) {
                Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: 'green', lineWidth: 4 });
            }

            if (result.codeResult?.code && result.line) {
                Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
            }
        };

        detectedHandler = function (result) {
            if (!result?.codeResult?.code || !result?.codeResult?.format) {
                return;
            }

            const code = result.codeResult.code;
            const format = result.codeResult.format;
            const scanKey = `${code}-${format}`;
            const state = getScannerState();

            if (state.scannedCodes.has(scanKey)) {
                return;
            }

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

                state.addBarcodeToChat(code, format);
                state.playBeep();
            }
        };

        Quagga.onProcessed(processedHandler);
        Quagga.onDetected(detectedHandler);
    }

    function stop() {
        if (processedHandler && typeof Quagga.offProcessed === 'function') {
            Quagga.offProcessed(processedHandler);
            processedHandler = null;
        }

        if (detectedHandler && typeof Quagga.offDetected === 'function') {
            Quagga.offDetected(detectedHandler);
            detectedHandler = null;
        }

        if (isRunning) {
            clearOverlayCanvas();
            Quagga.stop();
            isRunning = false;
            console.log('Quagga barcode scanner stopped');
        }
    }

    return { start, stop };
}
