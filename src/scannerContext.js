const scannerVariantPlugins = {};

const scannedCodes = new Set();
const detectionBuffer = new Map();
const CONFIRMATION_THRESHOLD = 2;
const BUFFER_TIMEOUT = 500;

let addBarcodeToChatHandler = () => {};
let playBeepHandler = () => {};
let perfMonitorHandler = null;

export function setRuntimeHandlers({ addBarcodeToChat, playBeep, perfMonitor }) {
    if (typeof addBarcodeToChat === 'function') {
        addBarcodeToChatHandler = addBarcodeToChat;
    }
    if (typeof playBeep === 'function') {
        playBeepHandler = playBeep;
    }
    if (perfMonitor) {
        perfMonitorHandler = perfMonitor;
    }
}

export function getPerfMonitor() {
    return perfMonitorHandler;
}

export function getScannerState() {
    return {
        scannedCodes,
        detectionBuffer,
        CONFIRMATION_THRESHOLD,
        BUFFER_TIMEOUT,
        addBarcodeToChat: addBarcodeToChatHandler,
        playBeep: playBeepHandler,
        perfMonitor: perfMonitorHandler
    };
}

export function registerScannerVariant(name, plugin) {
    scannerVariantPlugins[name] = plugin;
    console.log(`Registered scanner variant: ${name}`);
}

export function getScannerVariant(name) {
    return scannerVariantPlugins[name] || null;
}

export function hasScannerVariant(name) {
    return Boolean(scannerVariantPlugins[name]);
}

export {
    scannedCodes,
    detectionBuffer,
    CONFIRMATION_THRESHOLD,
    BUFFER_TIMEOUT
};
