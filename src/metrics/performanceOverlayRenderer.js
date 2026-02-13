export function createPerformanceOverlayRenderer() {
    let panel = null;

    function applyResponsiveStyles(target) {
        const isCompactViewport = window.matchMedia('(max-width: 480px)').matches;

        target.style.fontSize = isCompactViewport ? '11px' : '12px';
        target.style.padding = isCompactViewport ? '8px 10px' : '10px 12px';
        target.style.minWidth = isCompactViewport ? '180px' : '220px';
    }

    function ensurePanel() {
        if (panel) return panel;

        panel = document.createElement('div');
        panel.id = 'perf-overlay';
        panel.style.position = 'fixed';
        panel.style.top = 'calc(env(safe-area-inset-top, 0px) + 8px)';
        panel.style.left = 'calc(env(safe-area-inset-left, 0px) + 8px)';
        panel.style.maxWidth = 'min(320px, calc(100vw - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px) - 16px))';
        panel.style.width = 'fit-content';
        panel.style.zIndex = '9999';
        panel.style.background = 'rgba(0, 0, 0, 0.72)';
        panel.style.color = '#b9f7ff';
        panel.style.padding = '10px 12px';
        panel.style.borderRadius = '8px';
        panel.style.fontFamily = 'ui-monospace, SFMono-Regular, Menlo, monospace';
        panel.style.fontSize = '12px';
        panel.style.lineHeight = '1.35';
        panel.style.minWidth = '220px';
        panel.style.whiteSpace = 'pre-line';
        panel.style.overflowWrap = 'anywhere';
        panel.style.boxSizing = 'border-box';
        panel.style.pointerEvents = 'none';
        panel.style.border = '1px solid rgba(120, 190, 255, 0.35)';
        panel.style.display = 'none';
        document.body.appendChild(panel);

        applyResponsiveStyles(panel);
        window.addEventListener('resize', () => applyResponsiveStyles(panel));

        return panel;
    }

    function setVisible(visible) {
        const target = ensurePanel();
        target.style.display = visible ? 'block' : 'none';
    }

    function setLines(lines) {
        const target = ensurePanel();
        target.textContent = lines.join('\n');
    }

    function formatHeapText(heapUsedMb) {
        if (heapUsedMb === null || heapUsedMb === undefined) {
            return 'n/a';
        }
        return `${heapUsedMb.toFixed(1)} MB`;
    }

    function renderMetrics(snapshot) {
        setVisible(snapshot.isEnabled);
        if (!snapshot.isEnabled) {
            return;
        }

        const lines = [
            `Scanner Variant: ${snapshot.activeScannerVariant}`,
            `Uptime: ${snapshot.uptimeSeconds}s`,
            `Load(est): ${snapshot.estimatedCpuPercent}%`,
            `Heap: ${formatHeapText(snapshot.heapUsedMb)}`
        ];
        setLines(lines);
    }

    return {
        renderMetrics
    };
}
