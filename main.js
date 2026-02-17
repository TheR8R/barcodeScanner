import { createMonitor } from './src/metrics/performanceMetrics.js';
import {
    getScannerVariant,
    hasScannerVariant,
    setRuntimeHandlers,
    resetScannerSession
} from './src/variants/scannerContext.js';

import './src/variants/quagga2/profiles/profile1.js';
import './src/variants/quagga2/profiles/profile2.js';
import './src/variants/quagga2/profiles/profile3.js';
import './src/variants/quagga2/profiles/profile4.js';
import './src/variants/quagga2/profiles/profile5.js';

// Main coordinator - UI and shared state management
const replaceBtn = document.getElementById('replace-btn');
const resetBtn = document.getElementById('reset-btn');
const chatMessages = document.getElementById('chat-messages');
const scannerContainer = document.getElementById('scanner-container');
const scannerVariantSelect = document.getElementById('scanner-variant-select');
const metricsToggleBtn = document.getElementById('metrics-toggle-btn');

let isScanning = false;

// Performance metrics overlay manager
const perfMonitor = createMonitor();

let metricsEnabled = false;

let activeScannerVariant = null;
let activeScannerVariantName = null;

function updateMetricsToggleLabel() {
    if (!metricsToggleBtn) return;
    metricsToggleBtn.textContent = metricsEnabled ? 'Disable Metrics' : 'Enable Metrics';
}

function toggleMetrics() {
    metricsEnabled = !metricsEnabled;
    perfMonitor.setEnabled(metricsEnabled);
    updateMetricsToggleLabel();

    if (isScanning) {
        if (metricsEnabled) {
            perfMonitor.start(activeScannerVariantName || scannerVariantSelect.value);
        } else {
            perfMonitor.stop();
        }
    }
}

if (metricsToggleBtn) {
    metricsToggleBtn.addEventListener('click', toggleMetrics);
}

perfMonitor.setEnabled(metricsEnabled);
updateMetricsToggleLabel();

let audioContext = null;

function ensureAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    return audioContext;
}

function addBarcodeToChat(code, format) {
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    const messageDiv = document.createElement('div');
    messageDiv.className = 'barcode-message';
    messageDiv.innerHTML = `
        <div class="barcode-code">${code}</div>
        <div class="barcode-format">Format: ${format.toUpperCase()}</div>
        <div class="barcode-time">${timeString}</div>
    `;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function playBeep() {
    try {
        const ctx = ensureAudioContext();
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.frequency.value = 800;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.1);
    } catch (e) {
        console.warn('Beep failed:', e);
    }
}

setRuntimeHandlers({
    addBarcodeToChat,
    playBeep,
    perfMonitor
});

function startScanners() {
    replaceBtn.disabled = true;
    replaceBtn.textContent = 'Initializing...';

    ensureAudioContext();

    const selectedScannerVariant = scannerVariantSelect.value;

    const placeholder = chatMessages.querySelector('.chat-placeholder');
    if (placeholder) {
        placeholder.remove();
    }

    if (hasScannerVariant(selectedScannerVariant)) {
        const scannerVariant = getScannerVariant(selectedScannerVariant);
        activeScannerVariant = scannerVariant;
        activeScannerVariantName = selectedScannerVariant;

        if (metricsEnabled) {
            perfMonitor.start(selectedScannerVariant);
        }

        scannerVariant.start(scannerContainer, () => {
            isScanning = true;
            replaceBtn.textContent = 'Stop Scanner';
            replaceBtn.disabled = false;
            console.log(`${selectedScannerVariant} scanner variant started`);
        }, (error) => {
            console.error('Scanner variant initialization failed:', error);
            if (metricsEnabled) {
                perfMonitor.stop();
            }
            alert('Failed to initialize scanner: ' + error);
            replaceBtn.disabled = false;
            replaceBtn.textContent = 'Start Scanner';
            activeScannerVariant = null;
            activeScannerVariantName = null;
        });
    } else {
        if (metricsEnabled) {
            perfMonitor.stop();
        }
        alert('Scanner variant not found: ' + selectedScannerVariant);
        replaceBtn.disabled = false;
        replaceBtn.textContent = 'Start Scanner';
    }
}

function stopScanners() {
    if (isScanning) {
        if (activeScannerVariant) {
            activeScannerVariant.stop();
            activeScannerVariant = null;
        }
        isScanning = false;
        activeScannerVariantName = null;
        perfMonitor.stop();
        replaceBtn.textContent = 'Start Scanner';
        console.log('Scanner stopped');
    }
}

replaceBtn.addEventListener('click', function () {
    if (!isScanning) {
        startScanners();
    } else {
        stopScanners();
    }
});

resetBtn.addEventListener('click', function () {
    resetScannerSession();

    const messages = chatMessages.querySelectorAll('.barcode-message');
    messages.forEach(msg => msg.remove());

    if (chatMessages.children.length === 0) {
        const placeholder = document.createElement('div');
        placeholder.className = 'chat-placeholder';
        placeholder.textContent = 'Click "Start Scanner" to begin scanning...';
        chatMessages.appendChild(placeholder);
    }

    console.log('Scanned codes cleared');
});

function handleScannerVariantChange() {
    if (isScanning) {
        stopScanners();
        setTimeout(() => {
            startScanners();
        }, 500);
    }
}

scannerVariantSelect.addEventListener('change', handleScannerVariantChange);
