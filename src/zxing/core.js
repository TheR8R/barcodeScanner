import { getScannerState, getPerfMonitor } from '../scannerContext.js';

// Shared ZXing scanner variant core (supports CODE_128 and QR_CODE)
export function createZXingScannerVariant(config) {
        let codeReader = null;
        let videoElement = null;
        let overlayCanvas = null;
        let overlayContext = null;
        let overlayHideTimeout = null;
        let isRunning = false;
        let lastScanKey = null;
        let lastScanTime = 0;

        const dedupeWindowMs = config.dedupeWindowMs ?? 1200;

        function ensureVideoElement(container) {
            videoElement = container.querySelector('video');
            if (!videoElement) {
                videoElement = document.createElement('video');
                videoElement.autoplay = true;
                videoElement.muted = true;
                videoElement.setAttribute('playsinline', 'true');
                videoElement.setAttribute('webkit-playsinline', 'true');
                videoElement.style.width = '100%';
                videoElement.style.display = 'block';
                container.innerHTML = '';
                container.appendChild(videoElement);
            }
            return videoElement;
        }

        function ensureOverlayCanvas(container) {
            overlayCanvas = container.querySelector('canvas.zxing-overlay');
            if (!overlayCanvas) {
                overlayCanvas = document.createElement('canvas');
                overlayCanvas.className = 'drawingBuffer zxing-overlay';
                overlayCanvas.style.pointerEvents = 'none';
                container.appendChild(overlayCanvas);
            }
            overlayContext = overlayCanvas.getContext('2d', { willReadFrequently: true });
        }

        function syncOverlaySize() {
            if (!videoElement || !overlayCanvas) {
                return;
            }

            const width = videoElement.videoWidth || 0;
            const height = videoElement.videoHeight || 0;

            if (!width || !height) {
                return;
            }

            if (overlayCanvas.width !== width || overlayCanvas.height !== height) {
                overlayCanvas.width = width;
                overlayCanvas.height = height;
            }
        }

        function clearOverlay() {
            if (!overlayContext || !overlayCanvas) {
                return;
            }
            overlayContext.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
        }

        function pointToXY(point) {
            if (!point) return null;
            if (typeof point.getX === 'function' && typeof point.getY === 'function') {
                return { x: point.getX(), y: point.getY() };
            }
            if (typeof point.x === 'number' && typeof point.y === 'number') {
                return { x: point.x, y: point.y };
            }
            return null;
        }

        function drawDetectionOverlay(result) {
            if (!overlayContext || !result) {
                return;
            }

            syncOverlaySize();
            clearOverlay();

            const rawPoints = result.getResultPoints ? result.getResultPoints() : [];
            const points = rawPoints.map(pointToXY).filter(Boolean);

            if (points.length === 0) {
                return;
            }

            overlayContext.strokeStyle = '#00ff88';
            overlayContext.lineWidth = 3;

            if (points.length === 1) {
                const size = 20;
                overlayContext.strokeRect(
                    points[0].x - size / 2,
                    points[0].y - size / 2,
                    size,
                    size
                );
            } else if (points.length === 2) {
                const first = points[0];
                const second = points[1];
                const dx = second.x - first.x;
                const dy = second.y - first.y;
                const length = Math.hypot(dx, dy) || 1;

                const normalX = -dy / length;
                const normalY = dx / length;
                const halfThickness = Math.max(12, Math.min(42, length * 0.14));

                const p1 = { x: first.x + normalX * halfThickness, y: first.y + normalY * halfThickness };
                const p2 = { x: second.x + normalX * halfThickness, y: second.y + normalY * halfThickness };
                const p3 = { x: second.x - normalX * halfThickness, y: second.y - normalY * halfThickness };
                const p4 = { x: first.x - normalX * halfThickness, y: first.y - normalY * halfThickness };

                overlayContext.beginPath();
                overlayContext.moveTo(p1.x, p1.y);
                overlayContext.lineTo(p2.x, p2.y);
                overlayContext.lineTo(p3.x, p3.y);
                overlayContext.lineTo(p4.x, p4.y);
                overlayContext.closePath();
                overlayContext.stroke();
            } else {
                let minX = points[0].x;
                let minY = points[0].y;
                let maxX = points[0].x;
                let maxY = points[0].y;

                for (let index = 1; index < points.length; index++) {
                    const point = points[index];
                    if (point.x < minX) minX = point.x;
                    if (point.y < minY) minY = point.y;
                    if (point.x > maxX) maxX = point.x;
                    if (point.y > maxY) maxY = point.y;
                }

                const padding = 10;
                overlayContext.strokeRect(
                    minX - padding,
                    minY - padding,
                    (maxX - minX) + padding * 2,
                    (maxY - minY) + padding * 2
                );
            }

            if (overlayHideTimeout) {
                clearTimeout(overlayHideTimeout);
            }
            overlayHideTimeout = setTimeout(clearOverlay, 240);
        }

        function normalizeFormat(barcodeFormat, BarcodeFormat) {
            if (barcodeFormat === BarcodeFormat.QR_CODE) return 'QR_CODE';
            if (barcodeFormat === BarcodeFormat.CODE_128) return 'CODE_128';
            return null;
        }

        function shouldEmit(resultText, format) {
            const now = Date.now();
            const scanKey = `${resultText}-${format}`;
            if (scanKey === lastScanKey && now - lastScanTime < dedupeWindowMs) {
                return false;
            }
            lastScanKey = scanKey;
            lastScanTime = now;
            return true;
        }

        function start(container, onSuccess, onError) {
            try {
                const perf = getPerfMonitor();
                const BrowserMultiFormatReader = window.ZXing?.BrowserMultiFormatReader;
                const BarcodeFormat = window.ZXing?.BarcodeFormat;
                const DecodeHintType = window.ZXing?.DecodeHintType;

                if (!BrowserMultiFormatReader || !BarcodeFormat || !DecodeHintType) {
                    throw new Error('ZXing library not loaded');
                }

                const hints = new Map();
                hints.set(DecodeHintType.POSSIBLE_FORMATS, [
                    BarcodeFormat.CODE_128,
                    BarcodeFormat.QR_CODE
                ]);

                const localVideoElement = ensureVideoElement(container);
                ensureOverlayCanvas(container);
                codeReader = new BrowserMultiFormatReader(hints, config.scanIntervalMs);

                isRunning = true;
                if (onSuccess) onSuccess();

                const state = getScannerState();
                codeReader.decodeFromConstraints(
                    {
                        video: {
                            facingMode: { ideal: 'environment' },
                            width: { ideal: config.width },
                            height: { ideal: config.height }
                        },
                        audio: false
                    },
                    localVideoElement,
                    (result, error) => {
                        const callbackStart = performance.now();
                        perf?.recordCallback();
                        if (!isRunning) return;
                        try {
                            if (result) {
                                drawDetectionOverlay(result);

                                const resultText = result.getText();
                                const format = normalizeFormat(result.getBarcodeFormat(), BarcodeFormat);

                                if (!resultText || !format) {
                                    return;
                                }

                                if (!shouldEmit(resultText, format)) {
                                    return;
                                }

                                state.addBarcodeToChat(resultText, format);
                                state.playBeep();
                                perf?.recordDetection();
                            }

                            if (error) {
                                const message = String(error.message || '');
                                if (
                                    !message.includes('NotFoundException') &&
                                    !message.includes('No MultiFormat Readers')
                                ) {
                                    console.debug('ZXing decode warning:', error);
                                    perf?.recordError();
                                }
                            }
                        } finally {
                            perf?.recordDecodeMs(performance.now() - callbackStart);
                        }
                    }
                ).catch((error) => {
                    if (!isRunning) return;
                    console.error('ZXing decode failed:', error);
                    isRunning = false;
                    perf?.recordError();
                    if (onError) onError(error.message || error);
                });
            } catch (error) {
                console.error('ZXing start failed:', error);
                getPerfMonitor()?.recordError();
                if (onError) onError(error.message || error);
            }
        }

        function stop() {
            isRunning = false;
            lastScanKey = null;
            lastScanTime = 0;

            if (overlayHideTimeout) {
                clearTimeout(overlayHideTimeout);
                overlayHideTimeout = null;
            }
            clearOverlay();

            if (codeReader) {
                codeReader.reset();
                codeReader = null;
            }

            if (videoElement && videoElement.srcObject) {
                const stream = videoElement.srcObject;
                stream.getTracks().forEach((track) => track.stop());
                videoElement.srcObject = null;
            }

            overlayContext = null;
            overlayCanvas = null;
            videoElement = null;

            console.log(`ZXing scanner variant stopped (${config.label})`);
        }

        return { start, stop };
}
