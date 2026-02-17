import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createPermutationMatrix } from './profilePermutationMatrix.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const outputDir = path.join(rootDir, 'generated');
const outputPath = path.join(outputDir, 'profilePermutationMatrix.json');

async function main() {
    const matrix = createPermutationMatrix();
    const payload = {
        generatedAt: new Date().toISOString(),
        ...matrix
    };

    await mkdir(outputDir, { recursive: true });
    await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');

    console.log(`Generated ${payload.permutations.length} permutations`);
    console.log(`Saved: ${outputPath}`);
}

main().catch((error) => {
    console.error('Failed to generate permutation matrix:', error?.message || error);
    process.exit(1);
});
