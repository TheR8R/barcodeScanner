import { registerScannerVariant } from '../../scannerContext.js';
import { createQuagga2ScannerVariant } from '../core.js';
import { QUAGGA2_PROFILE_CONFIGS } from './configs.js';

// Quagga2 throttled variation
const quagga2ThrottledVariant = createQuagga2ScannerVariant(QUAGGA2_PROFILE_CONFIGS['quagga2-2']);

registerScannerVariant('quagga2-2', {
    start: quagga2ThrottledVariant.start,
    stop: quagga2ThrottledVariant.stop
});

console.log('Quagga2 profile 2 scanner variant registered');
