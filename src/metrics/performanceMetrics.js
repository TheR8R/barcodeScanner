import { createPerformanceOverlayRenderer } from './performanceOverlayRenderer.js';

// Performance metrics monitor (calculations only)
export function createMonitor() {
    const overlayRenderer = createPerformanceOverlayRenderer();

    let activeScannerVariant = 'idle';
    let isRunning = false;
    let isEnabled = false;
    let startedAt = 0;

    let callbackCount = 0;
    let callbacksPerSecond = 0;
    let callbacksInSecond = 0;
    let decodeCount = 0;
    let decodeTimeTotalMs = 0;
    let decodeMsPerSecond = 0;
    let decodeMsInSecond = 0;
    let detectionCount = 0;
    let errorCount = 0;

    let fps = 0;
    let lastFrameTs = 0;
    let framesThisSecond = 0;
    let rafId = null;

    let lagIntervalId = null;
    let expectedLagTs = 0;
    let lagSamples = 0;
    let lagAvgMs = 0;

    function resetCounters() {
        callbackCount = 0;
        callbacksPerSecond = 0;
        callbacksInSecond = 0;
        decodeTimeTotalMs = 0;
        decodeMsPerSecond = 0;
        decodeMsInSecond = 0;
        detectionCount = 0;
        errorCount = 0;
        fps = 0;
        lastFrameTs = 0;
        framesThisSecond = 0;
        lagSamples = 0;
        lagAvgMs = 0;
    }

    function sampleLoopLag() {
        const now = performance.now();
        if (!expectedLagTs) {
            expectedLagTs = now + 250;
            return;
        }
        const lag = Math.max(0, now - expectedLagTs);
        lagSamples += 1;
        lagAvgMs += (lag - lagAvgMs) / lagSamples;
        expectedLagTs = now + 250;
    }

    function animationLoop(ts) {
        if (!isRunning || !isEnabled) return;

        framesThisSecond += 1;
        if (!lastFrameTs) {
            lastFrameTs = ts;
        }
        if (ts - lastFrameTs >= 1000) {
            fps = Math.round((framesThisSecond * 1000) / (ts - lastFrameTs));
            callbacksPerSecond = callbacksInSecond;
            callbacksInSecond = 0;
            decodeMsPerSecond = decodeMsInSecond;
            decodeMsInSecond = 0;
            framesThisSecond = 0;
            lastFrameTs = ts;
            publishMetrics();
        }
        rafId = requestAnimationFrame(animationLoop);
    }

    function estimateCpuPercent() {
        const normalized = Math.min(99, Math.max(0, (lagAvgMs / 16.7) * 100));
        return Math.round(normalized);
    }

    function avgDecodeMs() {
        if (!decodeCount) return 0;
        return decodeTimeTotalMs / decodeCount;
    }

    function getHeapUsedMb() {
        const mem = performance.memory;
        if (!mem || !mem.usedJSHeapSize) {
            return null;
        }
        return mem.usedJSHeapSize / 1024 / 1024;
    }

    function uptimeSeconds() {
        if (!startedAt) return 0;
        return Math.max(0, Math.round((Date.now() - startedAt) / 1000));
    }

    function getMetricsSnapshot() {
        return {
            isEnabled,
            isRunning,
            activeScannerVariant,
            uptimeSeconds: uptimeSeconds(),
            fps,
            estimatedCpuPercent: estimateCpuPercent(),
            callbackCount,
            callbacksPerSecond,
            decodeMsPerSecond,
            avgDecodeMs: avgDecodeMs(),
            detectionCount,
            errorCount,
            heapUsedMb: getHeapUsedMb()
        };
    }

    function publishMetrics() {
        overlayRenderer.renderMetrics(getMetricsSnapshot());
    }

    function start(scannerVariantName) {
        if (!isEnabled) return;
        activeScannerVariant = scannerVariantName || 'unknown';
        isRunning = true;
        startedAt = Date.now();
        expectedLagTs = 0;
        resetCounters();
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(animationLoop);
        if (lagIntervalId) clearInterval(lagIntervalId);
        lagIntervalId = setInterval(sampleLoopLag, 250);
        publishMetrics();
    }

    function stop() {
        isRunning = false;
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
        if (lagIntervalId) {
            clearInterval(lagIntervalId);
            lagIntervalId = null;
        }
        publishMetrics();
    }

    function setEnabled(enabled) {
        isEnabled = Boolean(enabled);
        if (!isEnabled) {
            stop();
        }
        publishMetrics();
    }

    function getEnabled() {
        return isEnabled;
    }

    function recordCallback() {
        if (!isRunning || !isEnabled) return;
        callbackCount += 1;
        callbacksInSecond += 1;
    }

    function recordDecodeMs(ms) {
        if (!isEnabled || typeof ms !== 'number' || Number.isNaN(ms)) return;
        const normalizedMs = Math.max(0, ms);
        decodeCount += 1;
        decodeTimeTotalMs += normalizedMs;
        decodeMsInSecond += normalizedMs;
    }

    function recordDetection() {
        if (!isRunning || !isEnabled) return;
        detectionCount += 1;
    }

    function recordError() {
        if (!isEnabled) return;
        errorCount += 1;
        publishMetrics();
    }

    return {
        start,
        stop,
        setEnabled,
        getEnabled,
        recordCallback,
        recordDecodeMs,
        recordDetection,
        recordError
    };
}
