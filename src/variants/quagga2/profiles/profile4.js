import { registerScannerVariant } from '../../scannerContext.js';
import { createQuagga2ScannerVariant } from '../core.js';
import { QUAGGA2_PROFILE_CONFIGS } from './configs.js';

const quagga2Profile4Variant = createQuagga2ScannerVariant(QUAGGA2_PROFILE_CONFIGS['quagga2-4']);

registerScannerVariant('quagga2-4', {
    start: quagga2Profile4Variant.start,
    stop: quagga2Profile4Variant.stop
});

console.log('Quagga2 profile 4 scanner variant registered');
