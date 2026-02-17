const scannerVariantPlugins = {};

const scannedCodes = new Set();
const detectionBuffer = new Map();
const confirmationThreshold = 2;
const bufferTimeout = 500;
const acceptedScanCooldownMs = 2000;

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

export function emitDetectedCode(code, format) {
    addBarcodeToChatHandler(code, format);
    playBeepHandler();
}

/**
 * Tracks repeated detections of a scan candidate and confirms it once it has been
 * seen enough times within the buffer window.
 *
 * @param {string} scanKey - Unique key representing the detected code (e.g. value+format).
 * @param {Function} onConfirmed - Callback invoked when the candidate is confirmed.
 * @param {Object} [options] - Optional configuration overrides.
 * @param {number} [options.cooldownMs] - Time in milliseconds during which a confirmed
 *   scanKey is ignored for subsequent confirmations. Defaults to {@link acceptedScanCooldownMs}.
 * @returns {boolean} `true` if the scan was confirmed on this call, otherwise `false`.
 */
export function confirmScanCandidate(scanKey, onConfirmed, options = {}) {
    const cooldownMs = options.cooldownMs ?? acceptedScanCooldownMs;

    if (scannedCodes.has(scanKey)) {
        return false;
    }

    if (!detectionBuffer.has(scanKey)) {
        detectionBuffer.set(scanKey, {
            count: 1,
            timeout: setTimeout(() => {
                detectionBuffer.delete(scanKey);
            }, bufferTimeout)
        });
        return false;
    }

    const detection = detectionBuffer.get(scanKey);
    detection.count += 1;

    clearTimeout(detection.timeout);
    detection.timeout = setTimeout(() => {
        detectionBuffer.delete(scanKey);
    }, bufferTimeout);

    if (detection.count < confirmationThreshold) {
        return false;
    }

    clearTimeout(detection.timeout);
    detectionBuffer.delete(scanKey);

    scannedCodes.add(scanKey);
    setTimeout(() => scannedCodes.delete(scanKey), cooldownMs);

    if (typeof onConfirmed === 'function') {
        onConfirmed();
    }

    return true;
}

export function resetScannerSession() {
    scannedCodes.clear();
    detectionBuffer.forEach((detection) => clearTimeout(detection.timeout));
    detectionBuffer.clear();
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
