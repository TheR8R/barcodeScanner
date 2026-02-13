import { getScannerState } from '../scannerContext.js';

// Configurable Quagga2 barcode scanner factory
export function createQuaggaBarcodeScanner(config = {}) {
    let isRunning = false;
    let lastDrawTime = 0;
    let processedHandler = null;
    let detectedHandler = null;

    const drawIntervalMs = config.drawIntervalMs ?? 300;
    const frequency = config.frequency ?? 10;
    const width = config.width ?? 1280;
    const height = config.height ?? 720;
    const maxWorkers = config.maxWorkers ?? 2;
    const readers = config.readers ?? ['code_128_reader'];
    const locate = config.locate ?? true;
    const patchSize = config.patchSize ?? 'medium';
    const halfSample = config.halfSample ?? false;

    function buildQuaggaConfig(containerElement) {
        return {
            inputStream: {
                name: 'Live',
                type: 'LiveStream',
                target: containerElement,
                constraints: {
                    width: { ideal: width },
                    height: { ideal: height },
                    facingMode: 'environment'
                },
                area: {
                    top: '0%',
                    right: '0%',
                    left: '0%',
                    bottom: '0%'
                }
            },
            frequency,
            numOfWorkers: navigator.hardwareConcurrency
                ? Math.min(navigator.hardwareConcurrency, maxWorkers)
                : 1,
            decoder: {
                readers
            },
            locate,
            locator: {
                patchSize,
                halfSample
            }
        };
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
            const now = Date.now();

            if (now - lastDrawTime < drawIntervalMs) {
                return;
            }
            lastDrawTime = now;

            const drawingCtx = Quagga.canvas?.ctx?.overlay;
            const drawingCanvas = Quagga.canvas?.dom?.overlay;

            if (drawingCtx && drawingCanvas) {
                drawingCtx.clearRect(
                    0,
                    0,
                    parseInt(drawingCanvas.getAttribute('width')),
                    parseInt(drawingCanvas.getAttribute('height'))
                );
            }

            if (result) {
                if (result.boxes) {
                    result.boxes
                        .filter((box) => box !== result.box)
                        .forEach((box) => {
                            Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: 'blue', lineWidth: 2 });
                        });
                }

                if (result.box) {
                    Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: 'green', lineWidth: 2 });
                }

                if (result.codeResult && result.codeResult.code) {
                    Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
                }
            }

        };

        detectedHandler = function (result) {
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
            Quagga.stop();
            isRunning = false;
            console.log('Quagga barcode scanner stopped');
        }
    }

    return { start, stop };
}
