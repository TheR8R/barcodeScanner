# Barcode Scanner Notes

This project runs Quagga2 + jsQR with multiple scanner profiles and includes a permutation-based image benchmark workflow.

## Scanner runtime behavior

- **Confirmation threshold:** a code must be detected **2 times** before it is accepted.
- **Confirmation window:** both detections must happen within **500 ms**.
- **Accepted cooldown:** accepted scan keys are blocked for **2000 ms** to reduce immediate duplicates.
- **Lifecycle discipline:** scanner variants detach handlers and clear intervals on stop to avoid listener buildup.

## Active scanner profiles

- Profile keys are: `quagga2-1`, `quagga2-2`, `quagga2-3`, `quagga2-4`, `quagga2-5`.
- Profile config source of truth: `src/variants/quagga2/profiles/configs.js`.
- In current app tuning, each profile mainly differs by `patchSize` (`x-small` → `x-large`) and some processing flags.

## Benchmark workflow (image-based)

1. Put test images in `pictures/` (jpg/png/webp/bmp).
2. Generate permutation matrix:
   - `bun run generate:permutations`
3. Run benchmark against all permutations and all 5 profiles:
   - `bun run benchmark:profiles --timeout-ms 2000`

Optional flags:

- `--pictures-dir <path>`
- `--reports-dir <path>`
- `--matrix-file <path>`
- `--attempt-timeout-ms <ms>`

## Permutation matrix definition

Generated matrix combines:

- `width`: `1920`, `1280`, `960`, `480`
- `height`: `1080`, `720`, `540`, `270`
- `halfSample`: `true`, `false`

Each permutation contains 5 configs where all profiles share the same `width`, `height`, and `halfSample`, while `patchSize` is fixed per profile:

- profile 1: `x-small`
- profile 2: `small`
- profile 3: `medium`
- profile 4: `large`
- profile 5: `x-large`

## Benchmark outputs

Reports are written to `reports/`:

- JSON: full raw benchmark data per permutation/profile/image.
- Markdown: includes
  - Permutation summary table
  - **Top 5 permutations** sorted by total hits
  - Detailed per-permutation image hit/miss matrix and per-profile breakdown
