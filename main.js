// Main coordinator - UI and shared state management
const replaceBtn = document.getElementById('replace-btn');
const resetBtn = document.getElementById('reset-btn');
const chatMessages = document.getElementById('chat-messages');
const scannerContainer = document.getElementById('scanner-container');

let isScanning = false;
const scannedCodes = new Set(); // Track recent scans to avoid duplicates
const detectionBuffer = new Map(); // Buffer to confirm barcodes with multiple detections
const CONFIRMATION_THRESHOLD = 2; // Require 2 detections of the same code
const BUFFER_TIMEOUT = 500; // Clear buffer after 500ms if no confirmation

// Expose shared state for scanner modules
window.scannerState = {
    scannedCodes,
    detectionBuffer,
    CONFIRMATION_THRESHOLD,
    BUFFER_TIMEOUT,
    addBarcodeToChat,
    playBeep
};

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
    
    // Auto-scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function playBeep() {
    // Create a short beep sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

function startScanners() {
    replaceBtn.disabled = true;
    replaceBtn.textContent = "Initializing...";
    
    // Start barcode scanner
    window.BarcodeScanner.start(scannerContainer, () => {
        // Success callback
        isScanning = true;
        replaceBtn.textContent = "Stop Scanner";
        replaceBtn.disabled = false;
        
        // Clear placeholder
        const placeholder = chatMessages.querySelector('.chat-placeholder');
        if (placeholder) {
            placeholder.remove();
        }
        
        // Start QR scanner after a short delay
        setTimeout(() => {
            window.QRScanner.start();
        }, 1000);
    }, (error) => {
        // Error callback
        console.error("Scanner initialization failed:", error);
        alert("Failed to initialize scanner: " + error);
        replaceBtn.disabled = false;
        replaceBtn.textContent = "Start Scanner";
    });
}

function stopScanners() {
    if (isScanning) {
        window.BarcodeScanner.stop();
        window.QRScanner.stop();
        isScanning = false;
        replaceBtn.textContent = "Start Scanner";
        console.log("Scanners stopped");
    }
}

// Button click handler
replaceBtn.addEventListener('click', function() {
    if (!isScanning) {
        startScanners();
    } else {
        stopScanners();
    }
});

// Reset button handler
resetBtn.addEventListener('click', function() {
    // Clear the scanned codes set
    scannedCodes.clear();
    
    // Clear the detection buffer
    detectionBuffer.forEach(detection => clearTimeout(detection.timeout));
    detectionBuffer.clear();
    
    // Clear all barcode messages from chat
    const messages = chatMessages.querySelectorAll('.barcode-message');
    messages.forEach(msg => msg.remove());
    
    // Show placeholder if no messages remain
    if (chatMessages.children.length === 0) {
        const placeholder = document.createElement('div');
        placeholder.className = 'chat-placeholder';
        placeholder.textContent = 'Click "Start Scanner" to begin scanning...';
        chatMessages.appendChild(placeholder);
    }
    
    console.log('Scanned codes cleared');
});
