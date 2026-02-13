# Barcode Scanning Considerations

This file tracks practical considerations for scanning quality, stability, and performance.

## False positives and duplicate suppression

- **Confirmation threshold:** a code must be detected **2 times** before it is accepted.
- **Confirmation window:** both detections must happen within **500 ms** (`bufferTimeout`) or the pending detection is discarded.
- **Short re-scan cooldown (Quagga2):** accepted scan keys are blocked for **2000 ms** to avoid immediate repeats.
- **Dedupe window (ZXing):** identical `text + format` is suppressed for **1200 ms**.

## Camera and decode setup

- Rear camera is preferred (`facingMode: environment`) for mobile use.
- iOS inline playback support is required (`playsinline`, `webkit-playsinline`) to avoid forced fullscreen behavior.
- Scan cadence and resolution are variant-specific and should be tuned together:
  - Higher cadence/resolution improves small/far-code detection but increases CPU and battery usage.
  - Lower cadence/resolution reduces resource use but may increase time-to-read.

## Variant tradeoffs to compare

- **Quagga2 (standard):**
  - `frequency: 10`
  - `1280x720`
  - Quagga overlay draw throttled to `300 ms`
  - QR scan interval `300 ms`
- **ZXing (standard):**
  - decode interval `220 ms`
  - `1280x720`
  - dedupe window `1200 ms`
- **ZXing (throttled):**
  - decode interval `420 ms`
  - `960x540`
  - dedupe window `1200 ms`

## Performance-focused measurement notes (iPhone)

- Compare variants under the same lighting, distance, and device thermal state.
- Measure over sustained sessions (60-120s), not only first scans.
- Prefer metrics tied to app responsiveness and resource pressure:
  - startup latency,
  - event-loop lag/load estimate,
  - heap (when available in Safari).
- iOS Safari memory APIs can be limited; treat heap as best-effort.

## Operational notes

- Keep scanner lifecycle strict: start once, stop cleanly, clear intervals/listeners.
- Avoid background scanning when scanner UI is stopped.
- Keep overlay/metrics lightweight to avoid affecting measured scanner performance.
