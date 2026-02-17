const WIDTHS = [1920, 1280, 960, 480];
const HEIGHTS = [1080, 720, 540, 270];
const HALF_SAMPLES = [true, false];

const PROFILE_ORDER = ['quagga2-1', 'quagga2-2', 'quagga2-3', 'quagga2-4', 'quagga2-5'];
const PATCH_SIZE_BY_PROFILE = {
    'quagga2-1': 'x-small',
    'quagga2-2': 'small',
    'quagga2-3': 'medium',
    'quagga2-4': 'large',
    'quagga2-5': 'x-large'
};

function createProfileConfig(profileKey, shared) {
    return {
        label: profileKey.replace('quagga2-', ''),
        frequency: 10,
        width: shared.width,
        height: shared.height,
        maxWorkers: 1,
        readers: ['code_128_reader'],
        locate: true,
        patchSize: PATCH_SIZE_BY_PROFILE[profileKey],
        halfSample: shared.halfSample,
        qrScanIntervalMs: 200,
        qrStartDelayMs: 500,
        qrOverlayColor: 'blue'
    };
}

export function createPermutationMatrix() {
    const permutations = [];
    let permutationIndex = 0;

    for (const width of WIDTHS) {
        for (const height of HEIGHTS) {
            for (const halfSample of HALF_SAMPLES) {
                permutationIndex += 1;
                const shared = { width, height, halfSample };

                const configs = {};
                for (const profileKey of PROFILE_ORDER) {
                    configs[profileKey] = createProfileConfig(profileKey, shared);
                }

                permutations.push({
                    id: `perm-${String(permutationIndex).padStart(3, '0')}`,
                    shared,
                    configs
                });
            }
        }
    }

    return {
        schemaVersion: 1,
        profileOrder: PROFILE_ORDER,
        dimensions: {
            width: WIDTHS,
            height: HEIGHTS,
            halfSample: HALF_SAMPLES
        },
        permutations
    };
}
