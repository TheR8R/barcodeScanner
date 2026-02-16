import { registerScannerVariant } from '../scannerContext.js';
import { createQuagga2ScannerVariant } from './core.js';

// Quagga2 standard variation
const quagga2StandardVariant = createQuagga2ScannerVariant({
    label: 'standard',
    frequency: 10,
    width: 1920,
    height: 1080,
    maxWorkers: 2,
    readers: ['code_128_reader'],
    locate: true,
    patchSize: 'small',
    halfSample: false,
    qrScanIntervalMs: 300,
    qrStartDelayMs: 1000,
    qrOverlayColor: 'blue'
});

registerScannerVariant('quagga2', {
    start: quagga2StandardVariant.start,
    stop: quagga2StandardVariant.stop
});

console.log('Quagga2 standard scanner variant registered');
