import { registerScannerVariant } from '../../scannerContext.js';
import { createQuagga2ScannerVariant } from '../core.js';
import { QUAGGA2_PROFILE_CONFIGS } from './configs.js';

// Quagga2 standard variation
const quagga2StandardVariant = createQuagga2ScannerVariant(QUAGGA2_PROFILE_CONFIGS['quagga2-1']);

registerScannerVariant('quagga2-1', {
    start: quagga2StandardVariant.start,
    stop: quagga2StandardVariant.stop
});

console.log('Quagga2 profile 1 scanner variant registered');
