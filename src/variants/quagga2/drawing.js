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
