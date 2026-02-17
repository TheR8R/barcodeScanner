import { registerScannerVariant } from '../../scannerContext.js';
import { createQuagga2ScannerVariant } from '../core.js';
import { QUAGGA2_PROFILE_CONFIGS } from './configs.js';

const quagga2Profile5Variant = createQuagga2ScannerVariant(QUAGGA2_PROFILE_CONFIGS['quagga2-5']);

registerScannerVariant('quagga2-5', {
    start: quagga2Profile5Variant.start,
    stop: quagga2Profile5Variant.stop
});

console.log('Quagga2 profile 5 scanner variant registered');
