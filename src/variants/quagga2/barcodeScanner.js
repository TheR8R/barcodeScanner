import { confirmScanCandidate, emitDetectedCode } from '../scannerContext.js';
import { clearOverlayCanvas, drawBarcodeOverlay } from './drawing.js';

// Configurable Quagga2 barcode scanner factory
export function createQuaggaBarcodeScanner(config = {}) {
    let isRunning = false;
    let lastDrawTime = 0;
    let processedHandler = null;
    let detectedHandler = null;
           
    const idealWidth = config.width ?? 960;                // Preferred camera capture width 
    const idealHeight = config.height ?? 540;               // Preferred camera capture height
    const frequency = config.frequency ?? 6;               // Max processed frames per second. Lower values reduce CPU usage.
    const drawIntervalMs = config.drawIntervalMs ?? 200;    // Overlay redraw throttle. Detection still runs at configured decode cadence.
    const maxWorkers = config.maxWorkers ?? 2;              // Upper limit for web workers used by Quagga.
    const readers = config.readers ?? ['code_128_reader'];  // Barcode decoders Quagga will try, in order.
    const locate = config.locate ?? true;                   // Enables barcode localization before decoding.
    const patchSize = config.patchSize ?? 'small';         // Locator search grid size: smaller is slower but better for small barcodes.
    const halfSample = config.halfSample ?? false;          // Downsample image by 50% before localization for speed.
    const facingMode = config.facingMode ?? 'environment';  // Camera preference for back camera on phones/tablets.
    const useQuaggaOverlay = config.useQuaggaOverlay ?? true;

    /*
    * Utility to build the inputStream configuration for Quagga. This defines how Quagga will  access the camera and what constraints it will use.
    * The containerElement is where Quagga will insert the video element for the camera stream. * We also set the desired width, height, and facing mode for the camera.
    */
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
            // Scan area crop percentages (0% = full frame). Quagga will crop the input frames to this area before processing, which can improve performance and detection speed if you know where the barcode is likely to appear in the frame.
            area: {
                top: '0%',
                right: '0%',
                left: '0%',
                bottom: '0%'
            }
        };
    }

    /*
    * Utility to build the complete Quagga configuration object.
    */
    function buildQuaggaConfig(containerElement) {
        const numOfWorkers = navigator.hardwareConcurrency
            ? Math.min(navigator.hardwareConcurrency, maxWorkers)
            : 1;

        return {
            inputStream: buildInputStreamConfig(containerElement),
            frequency,
            numOfWorkers,
            decoder: { readers },
            locate,
            locator: {
                patchSize,
                halfSample
            },
            canvas: {
                createOverlay: useQuaggaOverlay
            }
        };
    }

    /*
    * Utility to detach Quagga event handlers. This is important to prevent memory leaks and unintended behavior if start() is called multiple times.
    * 
    * Without this cleanup, each start() could add new listeners while old ones remain active.
    * This would cause duplicated work per frame/detection (higher CPU/load, duplicate events, possible memory growth, and possible side effects).
    * Calling this function ensures that old handlers are properly removed before adding new ones.
    */
    function detachQuaggaHandlers() {
        if (processedHandler && typeof Quagga.offProcessed === 'function') {
            Quagga.offProcessed(processedHandler);
            processedHandler = null;
        }

        if (detectedHandler && typeof Quagga.offDetected === 'function') {
            Quagga.offDetected(detectedHandler);
            detectedHandler = null;
        }
    }

    /*
    * The start function initializes Quagga with the configured settings and starts the video stream and barcode processing.
    */
    function start(containerElement, onSuccess, onError) {
        if (isRunning) return; // Prevent multiple simultaneous starts.
        detachQuaggaHandlers(); // Ensure no old handlers are lingering before we start.

        // Initialize Quagga with the generated configuration. The input stream will be attached to the provided container element.
        Quagga.init(buildQuaggaConfig(containerElement), function (err) {
            if (err) {
                console.error('Quagga initialization failed:', err);
                if (onError) onError(err);
                return;
            }
            // For mobile Safari, we need to set the playsinline attribute on the video element to prevent it from going fullscreen when the camera is accessed.
            const video = containerElement.querySelector('video');
            if (video) {
                video.setAttribute('playsinline', true);
                video.setAttribute('webkit-playsinline', true);
            }

            Quagga.start();
            isRunning = true;
            if (onSuccess) onSuccess();
        });

        /*
        * Quagga's onProcessed callback can be very CPU intensive, especially with locate: true.
        * To mitigate this, we implement a simple throttle to limit how often we attempt to draw the overlay.
        * Detection still runs at the configured frequency, but the overlay will only update at most once per drawIntervalMs.
        */
        processedHandler = function (result) {
            if (!useQuaggaOverlay || !Quagga.canvas?.ctx?.overlay) return; // If we're not using Quagga's built-in overlay or it's not available, skip drawing.

            const now = performance.now();
            if (now - lastDrawTime < drawIntervalMs) return; // Throttle overlay redraws to reduce CPU usage.
            lastDrawTime = now;
            
            clearOverlayCanvas(); // Clear previous overlay drawings.

            if (!result) return;
            drawBarcodeOverlay(result); // Draw new overlay based on the latest processed frame result.
        };

        /*
        * The onDetected callback is triggered when Quagga successfully detects and decodes a barcode.
        * We use the confirmScanCandidate utility to ensure that we don't emit the same barcode multiple times in quick succession.
        */
        detectedHandler = function (result) {
            if (!result?.codeResult?.code || !result?.codeResult?.format) return; //if there's no code or format result, bail out early.

            // When a barcode is detected we extract the code and the format.
            const code = result.codeResult.code;
            const format = result.codeResult.format; 
            const scanKey = `${code}-${format}`; 

            // Emit the detected code through the confirmScanCandidate utility, which will handle deduplication and timing of scan confirmations.
            confirmScanCandidate(scanKey, () => {
                emitDetectedCode(code, format);
            });
        };

        // Attach our handlers to Quagga's events.
        Quagga.onProcessed(processedHandler);
        Quagga.onDetected(detectedHandler);
    }

    function stop() {
        // Detach event handlers to prevent memory leaks and unintended behavior if start is called again.
        detachQuaggaHandlers();

        // Stop Quagga and clear the overlay canvas. We check if it's running to avoid unnecessary calls.
        if (isRunning) {
            clearOverlayCanvas();
            Quagga.stop();
            isRunning = false;
            console.log('Quagga barcode scanner stopped');
        }
    }

    // Return the public API for this scanner variant, which includes start and stop methods.
    return { start, stop };
}
