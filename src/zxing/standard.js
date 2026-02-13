import { registerScannerVariant } from '../scannerContext.js';
import { createZXingScannerVariant } from './core.js';

// ZXing standard variation
const zxingStandardVariant = createZXingScannerVariant({
    label: 'standard',
    scanIntervalMs: 220,
    width: 1280,
    height: 720,
    dedupeWindowMs: 1200
});

registerScannerVariant('zxing', {
    start: zxingStandardVariant.start,
    stop: zxingStandardVariant.stop
});

console.log('ZXing standard scanner variant registered');
