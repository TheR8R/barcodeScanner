import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import Quagga from '@ericblade/quagga2';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const defaultPicturesDir = path.join(rootDir, 'pictures');
const defaultReportsDir = path.join(rootDir, 'reports');
const defaultMatrixFile = path.join(rootDir, 'generated', 'profilePermutationMatrix.json');

function parseArgs(rawArgs) {
    const args = {
        timeoutMs: 2000,
        picturesDir: defaultPicturesDir,
        reportsDir: defaultReportsDir,
        attemptTimeoutMs: 2500,
        matrixFile: defaultMatrixFile
    };

    for (let index = 0; index < rawArgs.length; index += 1) {
        const key = rawArgs[index];
        const next = rawArgs[index + 1];

        if (key === '--timeout-ms' && next) {
            args.timeoutMs = Number(next);
            index += 1;
            continue;
        }

        if (key === '--pictures-dir' && next) {
            args.picturesDir = path.resolve(next);
            index += 1;
            continue;
        }

        if (key === '--reports-dir' && next) {
            args.reportsDir = path.resolve(next);
            index += 1;
            continue;
        }

        if (key === '--attempt-timeout-ms' && next) {
            args.attemptTimeoutMs = Number(next);
            index += 1;
            continue;
        }

        if (key === '--matrix-file' && next) {
            args.matrixFile = path.resolve(next);
            index += 1;
            continue;
        }
    }

    if (!Number.isFinite(args.timeoutMs) || args.timeoutMs < 500) {
        throw new Error('Invalid --timeout-ms. Use a number >= 500.');
    }

    if (!Number.isFinite(args.attemptTimeoutMs) || args.attemptTimeoutMs < 250) {
        throw new Error('Invalid --attempt-timeout-ms. Use a number >= 250.');
    }

    return args;
}

async function loadPermutationMatrix(matrixFile) {
    try {
        const raw = await readFile(matrixFile, 'utf8');
        const parsed = JSON.parse(raw);

        if (!Array.isArray(parsed?.permutations) || parsed.permutations.length === 0) {
            throw new Error('Matrix has no permutations.');
        }

        if (!Array.isArray(parsed?.profileOrder) || parsed.profileOrder.length !== 5) {
            throw new Error('Matrix profileOrder must include exactly 5 profiles.');
        }

        return parsed;
    } catch (error) {
        if (error?.code === 'ENOENT') {
            throw new Error(
                `Matrix file not found: ${matrixFile}. Run \`bun run generate:permutations\` first.`
            );
        }
        throw error;
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function isImage(name) {
    return /\.(png|jpg|jpeg|webp|bmp)$/i.test(name);
}

async function getPictureFiles(picturesDir) {
    let entries;
    try {
        entries = await readdir(picturesDir, { withFileTypes: true });
    } catch (error) {
        if (error?.code === 'ENOENT') {
            throw new Error(`Pictures directory not found: ${picturesDir}`);
        }
        throw error;
    }

    const files = entries
        .filter((entry) => entry.isFile() && isImage(entry.name))
        .map((entry) => entry.name)
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    if (files.length === 0) {
        throw new Error(`No images found in ${picturesDir}. Add .png/.jpg/.jpeg/.webp/.bmp files.`);
    }

    return files;
}

async function decodeSingleWithTimeout(config, timeoutMs) {
    return await Promise.race([
        new Promise((resolve) => {
            Quagga.decodeSingle(config, (result) => {
                resolve(result ?? null);
            });
        }),
        new Promise((resolve) => {
            setTimeout(() => resolve(null), timeoutMs);
        })
    ]);
}

function buildDecodeConfig(imagePath, profile) {
    return {
        src: imagePath,
        inputStream: {
            size: Math.max(profile.width ?? 960, profile.height ?? 540),
            singleChannel: false
        },
        numOfWorkers: profile.maxWorkers ?? 1,
        locate: profile.locate ?? true,
        locator: {
            patchSize: profile.patchSize ?? 'small',
            halfSample: profile.halfSample ?? false
        },
        decoder: {
            readers: profile.readers ?? ['code_128_reader']
        }
    };
}

function formatHitText(result) {
    if (!result.scanned) {
        return 'MISS';
    }

    const codePreview = String(result.code ?? '').slice(0, 24);
    return `HIT (${result.format}: ${codePreview})`;
}

async function benchmarkOneImageProfile({ imagePath, imageName, profileName, profile, timeoutMs, attemptTimeoutMs }) {
    const startedAt = Date.now();
    const intervalMs = Math.max(80, Math.round(1000 / Math.max(1, profile.frequency ?? 1)));

    let attempts = 0;

    while (Date.now() - startedAt <= timeoutMs) {
        attempts += 1;

        const result = await decodeSingleWithTimeout(buildDecodeConfig(imagePath, profile), attemptTimeoutMs);
        const code = result?.codeResult?.code ?? null;
        const format = result?.codeResult?.format ?? null;

        if (code && format) {
            return {
                profileName,
                imageName,
                scanned: true,
                code,
                format,
                attempts,
                elapsedMs: Date.now() - startedAt
            };
        }

        const elapsed = Date.now() - startedAt;
        if (elapsed >= timeoutMs) {
            break;
        }

        await sleep(Math.min(intervalMs, timeoutMs - elapsed));
    }

    return {
        profileName,
        imageName,
        scanned: false,
        code: null,
        format: null,
        attempts,
        elapsedMs: timeoutMs
    };
}

function buildMarkdown(permutationResults, imageNames, timeoutMs) {
    const permutationTotals = permutationResults.map((permutationResult) => {
        const totalHits = permutationResult.profileOrder
            .map((profileName) => permutationResult.resultsByProfile[profileName].filter((item) => item.scanned).length)
            .reduce((sum, hits) => sum + hits, 0);

        return {
            permutationId: permutationResult.permutationId,
            shared: permutationResult.shared,
            totalHits
        };
    });

    const overviewHeader = ['Permutation', 'Shared', 'Total Hits'].join(' | ');
    const overviewDivider = ['---', '---', '---'].join(' | ');

    const overviewRows = permutationTotals.map((item) => {
        const shared = item.shared;
        return [
            item.permutationId,
            `w:${shared.width} h:${shared.height} half:${shared.halfSample}`,
            String(item.totalHits)
        ].join(' | ');
    });

    const topFive = [...permutationTotals]
        .sort((left, right) => {
            if (right.totalHits !== left.totalHits) {
                return right.totalHits - left.totalHits;
            }
            return left.permutationId.localeCompare(right.permutationId);
        })
        .slice(0, 5);

    const topFiveHeader = ['Rank', 'Permutation', 'Shared', 'Total Hits'].join(' | ');
    const topFiveDivider = ['---', '---', '---', '---'].join(' | ');
    const topFiveRows = topFive.map((item, index) => {
        const shared = item.shared;
        return [
            String(index + 1),
            item.permutationId,
            `w:${shared.width} h:${shared.height} half:${shared.halfSample}`,
            String(item.totalHits)
        ].join(' | ');
    });

    const detailBlocks = permutationResults.map((permutationResult) => {
        const profileNames = permutationResult.profileOrder;
        const resultsByProfile = permutationResult.resultsByProfile;

        const tableHead = ['Image', ...profileNames].join(' | ');
        const tableDivider = ['---', ...profileNames.map(() => '---')].join(' | ');

        const rows = imageNames.map((imageName) => {
            const rowValues = profileNames.map((profileName) => {
                const result = resultsByProfile[profileName].find((item) => item.imageName === imageName);
                return result?.scanned ? 'O' : 'X';
            });

            return [imageName, ...rowValues].join(' | ');
        });

        const profileDetails = profileNames
            .map((profileName) => {
                const results = resultsByProfile[profileName];
                const hits = results.filter((item) => item.scanned).length;
                const lines = [
                    `### ${profileName}`,
                    `- Hits: ${hits}/${results.length}`,
                    ...results.map((item) => {
                        return `- ${item.imageName}: ${formatHitText(item)} (attempts: ${item.attempts}, ${item.elapsedMs}ms)`;
                    })
                ];
                return lines.join('\n');
            })
            .join('\n\n');

        return [
            `## ${permutationResult.permutationId}`,
            `- Shared config: width=${permutationResult.shared.width}, height=${permutationResult.shared.height}, halfSample=${permutationResult.shared.halfSample}`,
            '',
            tableHead,
            tableDivider,
            ...rows,
            '',
            profileDetails
        ].join('\n');
    });

    return [
        '# Quagga Profile Permutation Benchmark Overview',
        '',
        `- Timeout per profile/image: ${timeoutMs}ms`,
        '',
        '## Permutation Summary',
        '',
        overviewHeader,
        overviewDivider,
        ...overviewRows,
        '',
        '## Top 5 Permutations',
        '',
        topFiveHeader,
        topFiveDivider,
        ...topFiveRows,
        '',
        ...detailBlocks,
        ''
    ].join('\n');
}

async function main() {
    const args = parseArgs(process.argv.slice(2));
    const matrix = await loadPermutationMatrix(args.matrixFile);
    const pictureFiles = await getPictureFiles(args.picturesDir);

    const permutationResults = [];

    console.log(`Found ${pictureFiles.length} image(s) in ${args.picturesDir}`);
    console.log(`Loaded ${matrix.permutations.length} permutations from ${args.matrixFile}`);
    console.log(`Timeout per profile/image: ${args.timeoutMs}ms`);

    for (const permutation of matrix.permutations) {
        const profileNames = matrix.profileOrder.filter((name) => permutation.configs?.[name]);
        const resultsByProfile = {};

        console.log(`\nPermutation ${permutation.id} (w:${permutation.shared.width}, h:${permutation.shared.height}, half:${permutation.shared.halfSample})`);

        for (const profileName of profileNames) {
            resultsByProfile[profileName] = [];
        }

        for (const imageName of pictureFiles) {
            const imagePath = path.join(args.picturesDir, imageName);
            const profileRuns = profileNames.map(async (profileName) => {
                const result = await benchmarkOneImageProfile({
                    imagePath,
                    imageName,
                    profileName,
                    profile: permutation.configs[profileName],
                    timeoutMs: args.timeoutMs,
                    attemptTimeoutMs: args.attemptTimeoutMs
                });

                return { profileName, result };
            });

            const imageResults = await Promise.all(profileRuns);
            for (const { profileName, result } of imageResults) {
                resultsByProfile[profileName].push(result);
                console.log(`- [${profileName}] ${imageName}: ${formatHitText(result)} in ${result.elapsedMs}ms (${result.attempts} attempts)`);
            }
        }

        permutationResults.push({
            permutationId: permutation.id,
            shared: permutation.shared,
            profileOrder: profileNames,
            resultsByProfile
        });
    }

    await mkdir(args.reportsDir, { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportBaseName = `profile-benchmark-${timestamp}`;
    const jsonPath = path.join(args.reportsDir, `${reportBaseName}.json`);
    const mdPath = path.join(args.reportsDir, `${reportBaseName}.md`);

    const payload = {
        generatedAt: new Date().toISOString(),
        matrixFile: args.matrixFile,
        permutationCount: matrix.permutations.length,
        timeoutMsPerProfileImage: args.timeoutMs,
        attemptTimeoutMs: args.attemptTimeoutMs,
        picturesDir: args.picturesDir,
        permutations: permutationResults
    };

    await writeFile(jsonPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
    await writeFile(mdPath, buildMarkdown(permutationResults, pictureFiles, args.timeoutMs), 'utf8');

    console.log('\nDone.');
    console.log(`JSON report: ${jsonPath}`);
    console.log(`Markdown overview: ${mdPath}`);
}

main().catch((error) => {
    console.error('Benchmark failed:', error?.message || error);
    process.exit(1);
});
