function getOverlayContext() {
    const drawingCtx = Quagga.canvas?.ctx?.overlay;
    const drawingCanvas = Quagga.canvas?.dom?.overlay;

    if (!drawingCtx || !drawingCanvas) {
        return null;
    }

    const widthAttr = parseInt(drawingCanvas.getAttribute('width'), 10);
    const heightAttr = parseInt(drawingCanvas.getAttribute('height'), 10);

    const width = Number.isFinite(widthAttr) ? widthAttr : drawingCanvas.width;
    const height = Number.isFinite(heightAttr) ? heightAttr : drawingCanvas.height;

    return { drawingCtx, drawingCanvas, width, height };
}

let staticScanAreaOverlayElement = null;

function parsePercentValue(value) {
    if (typeof value === 'string' && value.endsWith('%')) {
        const parsed = Number.parseFloat(value);
        if (Number.isFinite(parsed)) {
            return Math.min(100, Math.max(0, parsed));
        }
    }

    if (typeof value === 'number' && Number.isFinite(value)) {
        return Math.min(100, Math.max(0, value));
    }

    return 0;
}

export function clearOverlayCanvas() {
    const overlay = getOverlayContext();
    if (!overlay) {
        return;
    }

    overlay.drawingCtx.clearRect(0, 0, overlay.width, overlay.height);
}

export function drawBarcodeOverlay(result) {
    const overlay = getOverlayContext();
    if (!overlay || !result) {
        return;
    }

    if (result.boxes) {
        result.boxes
            .filter((box) => box !== result.box)
            .forEach((box) => {
                Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, overlay.drawingCtx, { color: 'blue', lineWidth: 4 });
            });
    }

    if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, overlay.drawingCtx, { color: 'green', lineWidth: 4 });
    }

    if (result.codeResult?.code && result.line) {
        Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, overlay.drawingCtx, { color: 'red', lineWidth: 3 });
    }
}

export function drawQROverlay(location, sourceWidth, sourceHeight, color = 'purple') {
    const overlay = getOverlayContext();
    if (!overlay || !location) {
        return;
    }

    const scaleX = sourceWidth > 0 ? overlay.width / sourceWidth : 1;
    const scaleY = sourceHeight > 0 ? overlay.height / sourceHeight : 1;

    const topLeft = {
        x: location.topLeftCorner.x * scaleX,
        y: location.topLeftCorner.y * scaleY
    };
    const topRight = {
        x: location.topRightCorner.x * scaleX,
        y: location.topRightCorner.y * scaleY
    };
    const bottomRight = {
        x: location.bottomRightCorner.x * scaleX,
        y: location.bottomRightCorner.y * scaleY
    };
    const bottomLeft = {
        x: location.bottomLeftCorner.x * scaleX,
        y: location.bottomLeftCorner.y * scaleY
    };

    overlay.drawingCtx.beginPath();
    overlay.drawingCtx.moveTo(topLeft.x, topLeft.y);
    overlay.drawingCtx.lineTo(topRight.x, topRight.y);
    overlay.drawingCtx.lineTo(bottomRight.x, bottomRight.y);
    overlay.drawingCtx.lineTo(bottomLeft.x, bottomLeft.y);
    overlay.drawingCtx.lineTo(topLeft.x, topLeft.y);
    overlay.drawingCtx.lineWidth = 4;
    overlay.drawingCtx.strokeStyle = color;
    overlay.drawingCtx.stroke();
}

export function createStaticScanAreaOverlay(containerElement, areaConfig) {
    if (!containerElement || !areaConfig) {
        return;
    }

    if (staticScanAreaOverlayElement) {
        staticScanAreaOverlayElement.remove();
        staticScanAreaOverlayElement = null;
    }

    const topPercent = parsePercentValue(areaConfig.top);
    const rightPercent = parsePercentValue(areaConfig.right);
    const bottomPercent = parsePercentValue(areaConfig.bottom);
    const leftPercent = parsePercentValue(areaConfig.left);

    const overlayRoot = document.createElement('div');
    overlayRoot.className = 'scan-area-overlay';
    overlayRoot.style.position = 'absolute';
    overlayRoot.style.inset = '0';
    overlayRoot.style.pointerEvents = 'none';
    overlayRoot.style.zIndex = '5';

    const createMask = () => {
        const mask = document.createElement('div');
        mask.style.position = 'absolute';
        mask.style.background = 'rgba(0, 0, 0, 0.5)';
        return mask;
    };

    const topMask = createMask();
    topMask.style.top = '0';
    topMask.style.left = '0';
    topMask.style.right = '0';
    topMask.style.height = `${topPercent}%`;

    const bottomMask = createMask();
    bottomMask.style.bottom = '0';
    bottomMask.style.left = '0';
    bottomMask.style.right = '0';
    bottomMask.style.height = `${bottomPercent}%`;

    const leftMask = createMask();
    leftMask.style.top = `${topPercent}%`;
    leftMask.style.bottom = `${bottomPercent}%`;
    leftMask.style.left = '0';
    leftMask.style.width = `${leftPercent}%`;

    const rightMask = createMask();
    rightMask.style.top = `${topPercent}%`;
    rightMask.style.bottom = `${bottomPercent}%`;
    rightMask.style.right = '0';
    rightMask.style.width = `${rightPercent}%`;

    const frame = document.createElement('div');
    frame.style.position = 'absolute';
    frame.style.top = `${topPercent}%`;
    frame.style.right = `${rightPercent}%`;
    frame.style.bottom = `${bottomPercent}%`;
    frame.style.left = `${leftPercent}%`;
    frame.style.border = '2px solid rgba(255, 255, 255, 0.8)';

    overlayRoot.append(topMask, bottomMask, leftMask, rightMask, frame);
    containerElement.appendChild(overlayRoot);
    staticScanAreaOverlayElement = overlayRoot;
}

export function removeStaticScanAreaOverlay() {
    if (!staticScanAreaOverlayElement) {
        return;
    }

    staticScanAreaOverlayElement.remove();
    staticScanAreaOverlayElement = null;
}
