import { registerScannerVariant } from '../scannerContext.js';
import { createQuagga2ScannerVariant } from './core.js';

// Quagga2 standard variation
const quagga2StandardVariant = createQuagga2ScannerVariant({
    label: 'standard',
    drawIntervalMs: 300,
    frequency: 10,
    width: 1280,
    height: 720,
    maxWorkers: 2,
    readers: ['code_128_reader'],
    locate: true,
    patchSize: 'medium',
    halfSample: false,
    qrScanIntervalMs: 300,
    qrStartDelayMs: 1000,
    qrOverlayColor: 'purple'
});

registerScannerVariant('quagga2', {
    start: quagga2StandardVariant.start,
    stop: quagga2StandardVariant.stop
});

console.log('Quagga2 standard scanner variant registered');
