import { registerScannerVariant } from '../scannerContext.js';
import { createZXingScannerVariant } from './core.js';

// ZXing throttled variation
const zxingThrottledVariant = createZXingScannerVariant({
    label: 'throttled',
    scanIntervalMs: 420,
    width: 960,
    height: 540,
    dedupeWindowMs: 1200
});

registerScannerVariant('zxing-throttled', {
    start: zxingThrottledVariant.start,
    stop: zxingThrottledVariant.stop
});

console.log('ZXing throttled scanner variant registered');
