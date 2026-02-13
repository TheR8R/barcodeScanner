import { registerScannerVariant } from '../scannerContext.js';
import { createQuagga2ScannerVariant } from './core.js';

// Quagga2 throttled variation
const quagga2ThrottledVariant = createQuagga2ScannerVariant({
    label: 'throttled',
    drawIntervalMs: 420,
    frequency: 6,
    width: 960,
    height: 540,
    maxWorkers: 1,
    readers: ['code_128_reader'],
    locate: true,
    patchSize: 'small',
    halfSample: true,
    qrScanIntervalMs: 420,
    qrStartDelayMs: 1000,
    qrOverlayColor: 'purple'
});

registerScannerVariant('quagga2-throttled', {
    start: quagga2ThrottledVariant.start,
    stop: quagga2ThrottledVariant.stop
});

console.log('Quagga2 throttled scanner variant registered');
