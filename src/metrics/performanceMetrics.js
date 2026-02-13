import { createPerformanceOverlayRenderer } from './performanceOverlayRenderer.js';

// Performance metrics monitor (calculations only)
export function createMonitor() {
    const overlayRenderer = createPerformanceOverlayRenderer();

    let activeScannerVariant = 'idle';
    let isEnabled = false;
    let startedAt = 0;

    let lagIntervalId = null;
    let publishIntervalId = null;
    let expectedLagTs = 0;
    let lagSamples = 0;
    let lagAvgMs = 0;

    function resetSampling() {
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

    function estimateCpuPercent() {
        const normalized = Math.min(99, Math.max(0, (lagAvgMs / 16.7) * 100));
        return Math.round(normalized);
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
            activeScannerVariant,
            uptimeSeconds: uptimeSeconds(),
            estimatedCpuPercent: estimateCpuPercent(),
            heapUsedMb: getHeapUsedMb()
        };
    }

    function publishMetrics() {
        overlayRenderer.renderMetrics(getMetricsSnapshot());
    }

    function start(scannerVariantName) {
        if (!isEnabled) return;
        activeScannerVariant = scannerVariantName || 'unknown';
        startedAt = Date.now();
        expectedLagTs = 0;
        resetSampling();
        if (lagIntervalId) clearInterval(lagIntervalId);
        lagIntervalId = setInterval(sampleLoopLag, 250);
        if (publishIntervalId) clearInterval(publishIntervalId);
        publishIntervalId = setInterval(publishMetrics, 1000);
        publishMetrics();
    }

    function stop() {
        if (lagIntervalId) {
            clearInterval(lagIntervalId);
            lagIntervalId = null;
        }
        if (publishIntervalId) {
            clearInterval(publishIntervalId);
            publishIntervalId = null;
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

    return {
        start,
        stop,
        setEnabled,
        getEnabled,
    };
}
