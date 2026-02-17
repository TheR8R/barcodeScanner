import { registerScannerVariant } from '../../scannerContext.js';
import { createQuagga2ScannerVariant } from '../core.js';
import { QUAGGA2_PROFILE_CONFIGS } from './configs.js';

// Quagga2 ultra-throttled variation
const quagga2UltraThrottledVariant = createQuagga2ScannerVariant(
    QUAGGA2_PROFILE_CONFIGS['quagga2-3']
);

registerScannerVariant('quagga2-3', {
    start: quagga2UltraThrottledVariant.start,
    stop: quagga2UltraThrottledVariant.stop
});

console.log('Quagga2 profile 3 scanner variant registered');
