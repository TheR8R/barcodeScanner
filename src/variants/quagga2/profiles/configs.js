
export const QUAGGA2_PROFILE_CONFIGS = {
    'quagga2-1': {
        label: '1',     
        frequency: 10,                  //Maximum scans per second. Controls how often frames are processed.
        width: 960,                     //Width of the video stream to be processed by Quagga. Higher values can improve detection accuracy but may reduce performance, especially on mobile devices.
        height: 540,                    //Height of the video stream to be processed by Quagga. Higher values can improve detection accuracy but may reduce performance, especially on mobile devices. 
        area: {                         //Defines the portion of the video stream to be scanned for barcodes. Specified as percentages from each edge (e.g., top: '10%' means the top 10% of the video frame will be excluded from scanning).
                                        // Adjusting this can improve performance if you know where barcodes are likely to appear in the frame.
            top: '0%',
            right: '0%',
            left: '0%',
            bottom: '0%'
        },                              //Defines the portion of the video stream to be scanned for barcodes. Specified as percentages from each edge (e.g., top: '10%' means the top 10% of the video frame will be excluded from scanning). Adjusting this can improve performance if you know where barcodes are likely to appear in the frame.
        maxWorkers: 1,                  //Maximum number of web workers Quagga will use for processing. More workers can improve performance on multi-core devices but also increase CPU usage.
        readers: ['code_128_reader'],   //List of barcode formats (readers) that Quagga will attempt to decode, in order. Specifying only the formats you need can improve performance.
        locate: true,                   //Controls whether Quagga attempts to locate the barcode in the image.
        patchSize: 'x-small',           //Size of the search grid for locating barcodes. Smaller patch sizes can improve detection of small barcodes but may reduce performance.
        halfSample: true,               //Whether to downsample the image by 50% before processing. This can improve performance at the cost of some accuracy, especially for small barcodes.
        qrScanIntervalMs: 200,          //Interval in milliseconds for scanning QR codes. Controls how often the QR scanner attempts to detect QR codes in the video stream.
        qrStartDelayMs: 500,            //Delay in milliseconds before starting the QR scanner after the barcode scanner has started. This allows the barcode scanner to initialize first, which can improve overall performance and reduce conflicts between the two scanners.
        qrOverlayColor: 'blue'          //Color used for the QR code detection overlay. This is purely visual and does not affect detection performance.
    },
    'quagga2-2': {
        label: '2',
        frequency: 10,
        width: 1920,
        height: 1080,
        area: {
            top: '25%',
            right: '10%',
            left: '10%',
            bottom: '25%'
        },
        maxWorkers: 2,
        readers: ['code_128_reader'],
        locate: true, 
        patchSize: 'small',
        halfSample: false,
        qrScanIntervalMs: 200,
        qrStartDelayMs: 500,
        qrOverlayColor: 'blue'
    },
    'quagga2-3': {
        label: '3',
        frequency: 10,
        width: 960,
        height: 540,
        maxWorkers: 1,
        readers: ['code_128_reader'],
        locate: true,
        patchSize: 'medium',
        halfSample: true,
        qrScanIntervalMs: 200,
        qrStartDelayMs: 500,
        qrOverlayColor: 'blue'
    },
    'quagga2-4': {
        label: '4',
        frequency: 10,
        width: 960,
        height: 540,
        maxWorkers: 1,
        readers: ['code_128_reader'],
        locate: true,
        patchSize: 'large',
        halfSample: true,
        qrScanIntervalMs: 200,
        qrStartDelayMs: 500,
        qrOverlayColor: 'blue'
    },
    'quagga2-5': {
        label: '5',
        frequency: 10,
        width: 960,
        height: 540,
        maxWorkers: 1,
        readers: ['code_128_reader'],
        locate: true,
        patchSize: 'x-large',
        halfSample: true,
        qrScanIntervalMs: 200,
        qrStartDelayMs: 500,
        qrOverlayColor: 'blue'
    },
};

export const QUAGGA2_PROFILE_ORDER = [
    'quagga2-1',
    'quagga2-2',
    'quagga2-3',
    'quagga2-4',
    'quagga2-5'
];
