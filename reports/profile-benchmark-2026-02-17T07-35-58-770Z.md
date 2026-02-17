# Quagga Profile Permutation Benchmark Overview

- Timeout per profile/image: 2000ms

## Permutation Summary

Permutation | Shared | Total Hits
--- | --- | ---
perm-001 | w:1920 h:1080 half:true | 6
perm-002 | w:1920 h:1080 half:false | 0
perm-003 | w:1920 h:720 half:true | 6
perm-004 | w:1920 h:720 half:false | 0
perm-005 | w:1920 h:540 half:true | 6
perm-006 | w:1920 h:540 half:false | 0
perm-007 | w:1920 h:270 half:true | 6
perm-008 | w:1920 h:270 half:false | 0
perm-009 | w:1280 h:1080 half:true | 6
perm-010 | w:1280 h:1080 half:false | 2
perm-011 | w:1280 h:720 half:true | 6
perm-012 | w:1280 h:720 half:false | 2
perm-013 | w:1280 h:540 half:true | 6
perm-014 | w:1280 h:540 half:false | 2
perm-015 | w:1280 h:270 half:true | 6
perm-016 | w:1280 h:270 half:false | 2
perm-017 | w:960 h:1080 half:true | 4
perm-018 | w:960 h:1080 half:false | 6
perm-019 | w:960 h:720 half:true | 4
perm-020 | w:960 h:720 half:false | 7
perm-021 | w:960 h:540 half:true | 4
perm-022 | w:960 h:540 half:false | 7
perm-023 | w:960 h:270 half:true | 4
perm-024 | w:960 h:270 half:false | 7
perm-025 | w:480 h:1080 half:true | 4
perm-026 | w:480 h:1080 half:false | 6
perm-027 | w:480 h:720 half:true | 0
perm-028 | w:480 h:720 half:false | 7
perm-029 | w:480 h:540 half:true | 0
perm-030 | w:480 h:540 half:false | 0
perm-031 | w:480 h:270 half:true | 0
perm-032 | w:480 h:270 half:false | 0

## Top 5 Permutations

Rank | Permutation | Shared | Total Hits
--- | --- | --- | ---
1 | perm-020 | w:960 h:720 half:false | 7
2 | perm-022 | w:960 h:540 half:false | 7
3 | perm-024 | w:960 h:270 half:false | 7
4 | perm-028 | w:480 h:720 half:false | 7
5 | perm-001 | w:1920 h:1080 half:true | 6

## perm-001
- Shared config: width=1920, height=1080, halfSample=true

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | O | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | O | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | O | O | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | O | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 042801000682) (attempts: 1, 602ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 3, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 570ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 4, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 4, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 4, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-2
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 4, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 577ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 3, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 574ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 4, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-3
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 4, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 3, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 4, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 5, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 4, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 471ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-4
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 4, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 574ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 3, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 5, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 4, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 4, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 4, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 4, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 3, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 5, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 4, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 4, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)
## perm-002
- Shared config: width=1920, height=1080, halfSample=false

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | X | X | X | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | X | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 2, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 2, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 2, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 2, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 2, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 2, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 2, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)

### quagga2-2
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 2, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 2, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 2, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 2, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 2, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 1, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 2, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)

### quagga2-3
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 2, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 2, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 2, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 2, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 2, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 2, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 2, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)

### quagga2-4
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 2, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 2, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 2, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 2, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 2, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 2, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 2, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 2, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 2, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 2, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 2, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 2, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 1, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 2, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)
## perm-003
- Shared config: width=1920, height=720, halfSample=true

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | O | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | O | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | O | O | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | O | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 042801000682) (attempts: 1, 659ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 580ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 3, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 4, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-2
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 4, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 564ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 584ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 4, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 3, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 4, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-3
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 4, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 4, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 4, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 642ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-4
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 4, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 564ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 4, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 4, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 3, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 4, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 4, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 4, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 3, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 4, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)
## perm-004
- Shared config: width=1920, height=720, halfSample=false

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | X | X | X | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | X | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 2, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 1, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 2, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 1, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 2, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 2, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 2, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)

### quagga2-2
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 2, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 1, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 2, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 1, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 2, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 2, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 2, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)

### quagga2-3
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 2, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 1, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 2, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 1, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 2, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 2, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 2, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)

### quagga2-4
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 2, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 1, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 2, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 1, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 2, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 2, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 2, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 2, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 1, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 2, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 1, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 2, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 2, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 2, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)
## perm-005
- Shared config: width=1920, height=540, halfSample=true

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | O | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | O | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | O | O | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | O | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 042801000682) (attempts: 1, 673ms)
- pro-52jtGarE.jpeg: MISS (attempts: 3, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 599ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 3, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-2
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 3, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 590ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 596ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 4, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 3, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 3, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 4, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-3
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 4, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 4, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 3, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 3, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 638ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-4
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 3, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 590ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 3, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 4, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 4, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 3, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 3, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 4, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 3, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 4, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 3, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 3, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 4, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)
## perm-006
- Shared config: width=1920, height=540, halfSample=false

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | X | X | X | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | X | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 1, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 1, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 2, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 1, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 1, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 1, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 2, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)

### quagga2-2
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 1, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 1, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 2, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 1, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 1, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 1, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 1, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)

### quagga2-3
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 1, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 1, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 2, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 1, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 1, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 1, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 1, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)

### quagga2-4
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 1, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 1, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 2, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 1, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 1, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 2, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 1, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 1, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 1, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 2, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 1, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 2, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 1, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 1, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)
## perm-007
- Shared config: width=1920, height=270, halfSample=true

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | O | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | O | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | O | O | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | O | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 042801000682) (attempts: 1, 697ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 3, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 4, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 623ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 3, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 4, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-2
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 4, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 601ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 3, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 623ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 3, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 4, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 4, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-3
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 3, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 4, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 3, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 3, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 4, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 633ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-4
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 603ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 4, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 4, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 4, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 3, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 4, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 3, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 4, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)
## perm-008
- Shared config: width=1920, height=270, halfSample=false

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | X | X | X | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | X | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 2, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 1, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 1, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 1, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 2, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 2, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 1, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)

### quagga2-2
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 2, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 1, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 1, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 1, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 2, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 2, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 1, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)

### quagga2-3
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 2, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 1, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 1, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 1, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 2, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 2, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 1, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)

### quagga2-4
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 2, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 1, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 2, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 1, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 2, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 2, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 2, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 2, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 2, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 1, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 1, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 1, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 2, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 1, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 2, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 2, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 1, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 2, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 2, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 2, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 2, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 1, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 2, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 2, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 2, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 1, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 1, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 2, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 2, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 2, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 1, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 1, 2000ms)
## perm-009
- Shared config: width=1280, height=1080, halfSample=true

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | O | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | O | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | O | O | O | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 6, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 5, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 5, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 6, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 6, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 6, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 6, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 7, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 7, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 7, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 6, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 10, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 5, 2000ms)

### quagga2-2
- Hits: 3/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 6, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 5, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 5, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 6, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 233ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 6, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 298ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 6, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 8, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 7, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 6, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 6, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 303ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 5, 2000ms)

### quagga2-3
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 6, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 5, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 5, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 6, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 6, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 6, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 7, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 6, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 7, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 6, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 307ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 5, 2000ms)

### quagga2-4
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 6, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 5, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 5, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 6, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 283ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 6, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 6, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 6, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 8, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 6, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 6, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 6, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 304ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 5, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 6, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 5, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 5, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 6, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 6, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 6, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 6, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 7, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 6, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 6, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 7, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 6, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 11, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 5, 2000ms)
## perm-010
- Shared config: width=1280, height=1080, halfSample=false

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | O | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | X | X | X | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | O | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | X | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 042801000682) (attempts: 1, 784ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 3, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 2, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-2
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 3, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 2, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-3
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: HIT (code_128: 042801000682) (attempts: 1, 595ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 3, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 2, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-4
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 4, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 3, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 2, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 5, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)
## perm-011
- Shared config: width=1280, height=720, halfSample=true

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | O | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | O | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | O | O | O | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 6, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 6, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 7, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 6, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 8, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 6, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 7, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 8, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 8, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 6, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 6, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 9, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 6, 2000ms)

### quagga2-2
- Hits: 3/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 6, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 7, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 6, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 6, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 189ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 8, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 6, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 294ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 6, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 8, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 6, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 7, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 301ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 6, 2000ms)

### quagga2-3
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 6, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 6, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 6, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 7, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 6, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 8, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 7, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 6, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 301ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 6, 2000ms)

### quagga2-4
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 6, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 6, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 6, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 281ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 8, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 6, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 6, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 7, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 7, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 7, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 6, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 301ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 7, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 6, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 6, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 6, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 8, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 6, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 7, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 6, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 6, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 7, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 7, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 6, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 9, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 6, 2000ms)
## perm-012
- Shared config: width=1280, height=720, halfSample=false

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | O | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | X | X | X | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | O | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | X | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 042801000682) (attempts: 1, 792ms)
- pro-52jtGarE.jpeg: MISS (attempts: 3, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 3, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 5, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-2
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 3, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 3, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 4, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)

### quagga2-3
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 3, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: HIT (code_128: 042801000682) (attempts: 1, 597ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 3, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-4
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 3, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 3, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 3, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 3, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 3, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)
## perm-013
- Shared config: width=1280, height=540, halfSample=true

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | O | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | O | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | O | O | O | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 5, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 6, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 6, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 9, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 5, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 7, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 5, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 7, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 6, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 6, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 5, 2000ms)

### quagga2-2
- Hits: 3/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 5, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 7, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 287ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 5, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 293ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 6, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 6, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 7, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 6, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 7, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 6, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 301ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 5, 2000ms)

### quagga2-3
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 6, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 7, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 6, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 9, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 5, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 7, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 7, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 7, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 6, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 6, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 301ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 5, 2000ms)

### quagga2-4
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 6, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 5, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 6, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 283ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 5, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 7, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 6, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 6, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 6, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 6, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 6, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 306ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 5, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 5, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 6, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 6, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 9, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 6, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 5, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 7, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 7, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 6, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 5, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 7, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 6, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 6, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 6, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 6, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 5, 2000ms)
## perm-014
- Shared config: width=1280, height=540, halfSample=false

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | O | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | X | X | X | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | O | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | X | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 042801000682) (attempts: 1, 859ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 3, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-2
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 3, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-3
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 3, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 3, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: HIT (code_128: 042801000682) (attempts: 1, 590ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 3, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-4
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 3, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 5, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 3, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 3, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 4, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)
## perm-015
- Shared config: width=1280, height=270, halfSample=true

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | O | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | O | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | O | O | O | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 6, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 6, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 6, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 6, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 6, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 6, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 6, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 7, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 6, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 9, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 6, 2000ms)

### quagga2-2
- Hits: 3/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 7, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 6, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 285ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 6, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 7, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 302ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 6, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 5, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 6, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 6, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 7, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 303ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 6, 2000ms)

### quagga2-3
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 6, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 6, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 6, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 6, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 6, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 6, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 6, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 6, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 303ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 6, 2000ms)

### quagga2-4
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 6, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 6, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 285ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 6, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 7, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 6, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 8, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 6, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 6, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 6, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 303ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 7, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 7, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 6, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 5, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 6, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 6, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 7, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 6, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 6, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 6, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 7, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 7, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 6, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 9, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 7, 2000ms)
## perm-016
- Shared config: width=1280, height=270, halfSample=false

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | O | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | X | X | X | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | O | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | X | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 042801000682) (attempts: 1, 794ms)
- pro-52jtGarE.jpeg: MISS (attempts: 3, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 3, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 4, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 2, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 2, 2000ms)

### quagga2-2
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 3, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 4, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 2, 2000ms)

### quagga2-3
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: HIT (code_128: 042801000682) (attempts: 1, 595ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 4, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 2, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 5, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 2, 2000ms)

### quagga2-4
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 3, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 5, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 4, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 2, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 2, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 4, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 3, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 3, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 3, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 4, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 4, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 4, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 4, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 3, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 4, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 3, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 2, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 4, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 3, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 4, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 3, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 3, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 3, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 3, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 4, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 3, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)
## perm-017
- Shared config: width=960, height=1080, halfSample=true

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | O | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | X | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | O | O | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 7, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 8, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 8, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 10, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 8, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 8, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 8, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 7, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 6, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 7, 2000ms)

### quagga2-2
- Hits: 3/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 8, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 7, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 8, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 042801000682) (attempts: 1, 262ms)
- pro-52jtGarE.jpeg: MISS (attempts: 8, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 241ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 243ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 8, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 8, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 8, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 7, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 6, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 7, 2000ms)

### quagga2-3
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 8, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 9, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 7, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 8, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 8, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 8, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 10, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 8, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 8, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 244ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 9, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 8, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 6, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)

### quagga2-4
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 8, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 7, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 8, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 9, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 8, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 10, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 8, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 9, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 8, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 7, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 6, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 7, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 8, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 7, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 8, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 8, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 8, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 10, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 8, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 7, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 8, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 8, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 6, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)
## perm-018
- Shared config: width=960, height=1080, halfSample=false

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | O | O | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | X | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | O | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | O | X | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | O | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 5, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 4, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 042801000682) (attempts: 1, 565ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 4, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 5, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 4, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 4, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 414ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 4, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 5, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 4, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 5, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 4, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 5, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 5, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-2
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 5, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 4, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 042801000682) (attempts: 1, 565ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 4, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 404ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 5, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 4, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 4, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 5, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 4, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 5, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 4, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 5, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 4, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 5, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 5, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)

### quagga2-3
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 5, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 4, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 4, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 4, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 5, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 4, 2000ms)
- pro-DHIc9DB2.jpeg: HIT (code_128: 042801000682) (attempts: 1, 420ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 4, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 5, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 4, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 5, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 4, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 5, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 4, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 5, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 5, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 498ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)

### quagga2-4
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 5, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 4, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 4, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 4, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 5, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 4, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 4, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 5, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 4, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 4, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 5, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 4, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 5, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 4, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 5, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 5, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 4, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 5, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 4, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 4, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 4, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 6, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 6, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 4, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 4, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 5, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 4, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 5, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 4, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 5, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 4, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 6, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 5, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 3, 2000ms)
## perm-019
- Shared config: width=960, height=720, halfSample=true

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | O | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | O | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | O | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 9, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 9, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 9, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 9, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 8, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 11, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 9, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 7, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 9, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 9, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 9, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 8, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 9, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 7, 2000ms)

### quagga2-2
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 9, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 8, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 8, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 204ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 8, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 10, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 7, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 211ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 9, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 8, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 8, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 10, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 7, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 9, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 9, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 7, 2000ms)

### quagga2-3
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 9, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 9, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 9, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 9, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 9, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 8, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 10, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 8, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 9, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 7, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 9, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 9, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 9, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 8, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 9, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)

### quagga2-4
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 9, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 9, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 9, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 9, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 8, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 8, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 208ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 9, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 7, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 9, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 8, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 9, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 7, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 9, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 214ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 7, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 9, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 9, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 9, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 8, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 8, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 11, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 8, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 10, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 7, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 10, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 8, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 9, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 7, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 8, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 9, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)
## perm-020
- Shared config: width=960, height=720, halfSample=false

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | O | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | O | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | O | X | X
pro-IiUZawgC.jpeg | O | O | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | O | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 5, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 042801000682) (attempts: 1, 426ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 4, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 6, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 4, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 7, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 342ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 5, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 4, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 5, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 5, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 5, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 5, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 5, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 5, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 6, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 5, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)

### quagga2-2
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 6, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 5, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 5, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 323ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 6, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 4, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 7, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 342ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 6, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 4, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 6, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 5, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 5, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 5, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 5, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 6, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 6, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)

### quagga2-3
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 5, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 4, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 4, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: HIT (code_128: 042801000682) (attempts: 1, 378ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 6, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 5, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 4, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 5, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 5, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 6, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 5, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 5, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 6, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 384ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)

### quagga2-4
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 6, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 5, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 4, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 322ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 4, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 5, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 7, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 7, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 5, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 4, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 6, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 5, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 5, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 5, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 5, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 5, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 6, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 5, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 5, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 6, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 4, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 7, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 5, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 4, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 5, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 5, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 5, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 5, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 5, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 5, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)
## perm-021
- Shared config: width=960, height=540, halfSample=true

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | O | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | O | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | O | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 9, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 7, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 8, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 8, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 8, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 11, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 10, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 8, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 9, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 10, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 8, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 7, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 8, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 8, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 9, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 9, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 7, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 7, 2000ms)

### quagga2-2
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 9, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 9, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 9, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 206ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 8, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 8, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 9, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 213ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 8, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 8, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 9, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 8, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 8, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 7, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)

### quagga2-3
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 9, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 8, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 9, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 11, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 9, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 9, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 8, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 8, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 9, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 8, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 9, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 10, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)

### quagga2-4
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 9, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 7, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 8, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 8, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 206ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 8, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 8, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 10, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 9, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 8, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 8, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 8, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 10, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 226ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 9, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 7, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 9, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 8, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 10, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 8, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 8, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 9, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 9, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 8, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 8, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 8, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 8, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)
## perm-022
- Shared config: width=960, height=540, halfSample=false

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | O | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | O | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | O | X | X
pro-IiUZawgC.jpeg | O | O | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | O | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 5, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 042801000682) (attempts: 1, 430ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 5, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 6, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 4, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 5, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 340ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 6, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 4, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 5, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 5, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 6, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 6, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 5, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 6, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 5, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)

### quagga2-2
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 5, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 4, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 5, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 327ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 6, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 4, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 5, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 5, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 224ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 5, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 4, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 5, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 5, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 5, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 5, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 6, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 5, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)

### quagga2-3
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 4, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 6, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 5, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 6, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 4, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 5, 2000ms)
- pro-EOCyr0qr.jpeg: HIT (code_128: 042801000682) (attempts: 1, 382ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 6, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 5, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 4, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 5, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 7, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 6, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 5, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 5, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 5, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 377ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)

### quagga2-4
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 5, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 5, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 5, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 5, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 323ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 6, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 4, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 5, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 5, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 7, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 5, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 4, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 5, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 5, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 5, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 6, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 5, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 5, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 5, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 4, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 5, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 6, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 4, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 5, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 6, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 5, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 5, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 5, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 5, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 5, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 6, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 5, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 7, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 5, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)
## perm-023
- Shared config: width=960, height=270, halfSample=true

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | O | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | O | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | O | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 10, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 7, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 7, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 9, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 9, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 9, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 8, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 9, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 9, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 9, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 10, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 8, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 9, 2000ms)

### quagga2-2
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 8, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 9, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 7, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 8, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 9, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 9, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 173ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 8, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 9, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 8, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 9, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 212ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 9, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 9, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 10, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 9, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 8, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)

### quagga2-3
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 8, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 9, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 7, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 7, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 9, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 8, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 9, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 8, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 9, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 8, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 8, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 8, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 9, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 8, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 9, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 9, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 7, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 9, 2000ms)

### quagga2-4
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 9, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 7, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 7, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 9, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 9, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 203ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 8, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 9, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 8, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 8, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 9, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 10, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 9, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 218ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 9, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 9, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 9, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 7, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 7, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 9, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 9, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 10, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 8, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 9, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 9, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 9, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 8, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 9, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 8, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 9, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 9, 2000ms)
## perm-024
- Shared config: width=960, height=270, halfSample=false

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | O | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | O | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | O | X | X
pro-IiUZawgC.jpeg | O | O | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | O | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 5, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 042801000682) (attempts: 1, 431ms)
- pro-52jtGarE.jpeg: MISS (attempts: 5, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 5, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 5, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 5, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 5, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 267ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 5, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 5, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 5, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 5, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 5, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 5, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 5, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 5, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 6, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)

### quagga2-2
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 6, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 5, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 5, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 5, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 321ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 5, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 5, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 5, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 331ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 5, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 5, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 5, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 7, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 6, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 5, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 5, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 5, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 6, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 6, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 5, 2000ms)

### quagga2-3
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 6, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 5, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 4, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 5, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 5, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 5, 2000ms)
- pro-EOCyr0qr.jpeg: HIT (code_128: 042801000682) (attempts: 1, 382ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 7, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 5, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 5, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 5, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 5, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 5, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 5, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 6, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 5, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 380ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)

### quagga2-4
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 6, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 5, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 5, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 5, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 325ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 5, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 5, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 5, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 7, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 5, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 5, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 5, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 7, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 5, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 5, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 5, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 5, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 5, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 6, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 6, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 5, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 5, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 5, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 7, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 5, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 5, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 6, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 7, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 5, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 5, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 6, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 7, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 5, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 5, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 5, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 5, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 6, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 6, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)
## perm-025
- Shared config: width=480, height=1080, halfSample=true

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | O | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | X | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | O | O | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 7, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 7, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 7, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 8, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 8, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 8, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 8, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 7, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 7, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 7, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 8, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 6, 2000ms)

### quagga2-2
- Hits: 3/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 7, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 7, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 042801000682) (attempts: 1, 260ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 232ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 8, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 169ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 8, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 8, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 7, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 7, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 8, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 6, 2000ms)

### quagga2-3
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 6, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 7, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 7, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 8, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 7, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 246ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 8, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 7, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 7, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 6, 2000ms)

### quagga2-4
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 7, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 6, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 8, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 6, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 6, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 7, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 7, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 7, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 8, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 9, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 6, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 7, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 7, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 7, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 8, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 8, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 7, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 8, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 8, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 7, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 7, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 7, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 7, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 7, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 7, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 6, 2000ms)
## perm-026
- Shared config: width=480, height=1080, halfSample=false

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | O | O | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | X | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | O | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | O | X | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | O | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 5, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 5, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 042801000682) (attempts: 1, 591ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 5, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 5, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 4, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 410ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 4, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 4, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 5, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 4, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 5, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 5, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)

### quagga2-2
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 5, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 5, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 042801000682) (attempts: 1, 591ms)
- pro-52jtGarE.jpeg: MISS (attempts: 5, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 4, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 415ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 5, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 4, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 5, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 4, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 6, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 4, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 4, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 6, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 4, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 5, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 5, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)

### quagga2-3
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 5, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 5, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 4, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 5, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: HIT (code_128: 042801000682) (attempts: 1, 443ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 4, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 6, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 4, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 4, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 5, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 4, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 5, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 490ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)

### quagga2-4
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 5, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 5, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 5, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 3, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 5, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 5, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 4, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 6, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 4, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 3, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 4, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 5, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 5, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 4, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 4, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 5, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 5, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 5, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 5, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 4, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 3, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 4, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 4, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 4, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 5, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 5, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 3, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 5, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 4, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 6, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 4, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 4, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 6, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 4, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 5, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 4, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 4, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 5, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 4, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 5, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 5, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 4, 2000ms)
## perm-027
- Shared config: width=480, height=720, halfSample=true

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | X | X | X | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | X | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 10, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 9, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 8, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 8, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 10, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 8, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 10, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 10, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 8, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 9, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 10, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 10, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 10, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 9, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 11, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 10, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 9, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 10, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 9, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 10, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 9, 2000ms)

### quagga2-2
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 9, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 9, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 9, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 9, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 10, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 8, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 10, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 10, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 10, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 9, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 10, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 10, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 11, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 10, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 10, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 9, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 10, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 10, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 10, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 9, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 10, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 10, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 10, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 10, 2000ms)

### quagga2-3
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 10, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 9, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 9, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 8, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 9, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 10, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 9, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 10, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 10, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 10, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 9, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 10, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 10, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 10, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 9, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 10, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 9, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 10, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 10, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 10, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 9, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 9, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 9, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 10, 2000ms)

### quagga2-4
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 10, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 9, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 8, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 9, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 11, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 8, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 10, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 10, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 8, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 9, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 10, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 10, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 11, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 9, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 11, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 10, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 10, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 10, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 9, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 10, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 10, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 10, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 10, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 9, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 8, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 9, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 10, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 9, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 10, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 10, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 9, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 8, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 10, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 10, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 10, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 9, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 11, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 9, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 11, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 10, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 11, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 9, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 9, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 10, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 9, 2000ms)
## perm-028
- Shared config: width=480, height=720, halfSample=false

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | O | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | O | X | O | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | O | O | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | O | O | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 6, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 7, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 8, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 8, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 8, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 7, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 227ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 7, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 10, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 8, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 7, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 8, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 9, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 8, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 7, 2000ms)

### quagga2-2
- Hits: 3/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 9, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 6, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 7, 2000ms)
- pro-5msmZKkB.jpeg: HIT (code_128: 002801000614) (attempts: 1, 267ms)
- pro-52jtGarE.jpeg: MISS (attempts: 8, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 215ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 7, 2000ms)
- pro-IiUZawgC.jpeg: HIT (code_128: 042801000682) (attempts: 1, 227ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 9, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 7, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 8, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 8, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 9, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 7, 2000ms)

### quagga2-3
- Hits: 1/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 9, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 6, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 8, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 8, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 6, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 8, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 8, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 8, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 10, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 8, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 8, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 9, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 9, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 8, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 248ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 6, 2000ms)

### quagga2-4
- Hits: 2/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 8, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 9, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 6, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 8, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 8, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: HIT (code_128: 042801000682) (attempts: 1, 151ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 8, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 8, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 7, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 9, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 8, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 8, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 8, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 8, 2000ms)
- pro-XPAfQfdu.jpeg: HIT (code_128: 042801000682) (attempts: 1, 244ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 6, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 7, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 8, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 6, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 6, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 8, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 9, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 7, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 8, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 8, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 7, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 7, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 7, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 8, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 7, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 6, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 9, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 8, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 8, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 9, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 8, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 9, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 8, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 7, 2000ms)
## perm-029
- Shared config: width=480, height=540, halfSample=true

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | X | X | X | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | X | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 11, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 10, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 11, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 12, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 10, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 10, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 11, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 12, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 12, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 9, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 11, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 10, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 9, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 10, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 11, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 11, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 10, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 10, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 11, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 10, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 10, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 10, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 9, 2000ms)

### quagga2-2
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 11, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 9, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 11, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 11, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 11, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 11, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 11, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 12, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 11, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 10, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 12, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 11, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 9, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 10, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 11, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 11, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 10, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 9, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 10, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 12, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 11, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 11, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 11, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 9, 2000ms)

### quagga2-3
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 11, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 10, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 10, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 11, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 10, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 10, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 11, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 12, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 11, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 10, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 11, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 10, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 10, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 9, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 11, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 11, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 11, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 10, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 9, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 9, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 11, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 10, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 11, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 11, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 9, 2000ms)

### quagga2-4
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 11, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 10, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 10, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 10, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 10, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 11, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 11, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 13, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 11, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 10, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 12, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 10, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 10, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 9, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 10, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 10, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 10, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 11, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 10, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 11, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 10, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 11, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 10, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 10, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 11, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 10, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 11, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 11, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 10, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 10, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 11, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 12, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 11, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 9, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 11, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 10, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 10, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 10, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 11, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 12, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 12, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 10, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 11, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 11, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 10, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 10, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 10, 2000ms)
## perm-030
- Shared config: width=480, height=540, halfSample=false

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | X | X | X | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | X | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 8, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 9, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 9, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 8, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 10, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 9, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 10, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 10, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 10, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 9, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 8, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 9, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 10, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 8, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 10, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 10, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 9, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 8, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 10, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 9, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 10, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)

### quagga2-2
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 9, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 10, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 8, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 9, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 9, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 9, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 10, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 9, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 8, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 9, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 8, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 10, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 10, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 9, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 8, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 10, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 9, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 11, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)

### quagga2-3
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 9, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 9, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 8, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 10, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 10, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 10, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 10, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 10, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 9, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 8, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 8, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 8, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 9, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 10, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 10, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 8, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 9, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 10, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)

### quagga2-4
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 9, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 10, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 8, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 9, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 10, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 9, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 9, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 10, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 9, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 8, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 8, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 8, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 9, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 10, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 9, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 8, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 8, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 10, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 10, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 9, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 10, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 9, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 8, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 9, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 9, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 9, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 10, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 10, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 9, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 9, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 8, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 9, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 9, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 9, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 10, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 9, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 8, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 8, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 10, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 8, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 10, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 10, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 9, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)
## perm-031
- Shared config: width=480, height=270, halfSample=true

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | X | X | X | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | X | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 11, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 10, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 9, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 10, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 12, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 10, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 11, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 11, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 12, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 11, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 9, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 9, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 9, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 12, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 11, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 11, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 11, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 12, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 10, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 10, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 10, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 10, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 10, 2000ms)

### quagga2-2
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 10, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 10, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 10, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 10, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 12, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 10, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 11, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 12, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 12, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 9, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 9, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 9, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 9, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 11, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 11, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 11, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 11, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 11, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 12, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 10, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 11, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 9, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 9, 2000ms)

### quagga2-3
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 12, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 9, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 9, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 11, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 11, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 10, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 10, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 12, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 12, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 9, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 10, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 10, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 10, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 10, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 10, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 11, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 11, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 11, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 11, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 11, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 11, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 10, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 10, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 9, 2000ms)

### quagga2-4
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 10, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 10, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 9, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 11, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 12, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 10, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 11, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 12, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 11, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 10, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 9, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 10, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 9, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 10, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 11, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 11, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 11, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 11, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 11, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 11, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 10, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 10, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 9, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 10, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 10, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 9, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 10, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 12, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 10, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 10, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 11, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 12, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 10, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 9, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 10, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 9, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 10, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 11, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 11, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 9, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 11, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 12, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 11, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 11, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 10, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 11, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 10, 2000ms)
## perm-032
- Shared config: width=480, height=270, halfSample=false

Image | quagga2-1 | quagga2-2 | quagga2-3 | quagga2-4 | quagga2-5
--- | --- | --- | --- | --- | ---
pro-0KEAw9UH.jpeg | X | X | X | X | X
pro-1HzJls4I.jpeg | X | X | X | X | X
pro-5j0wkf3p.jpeg | X | X | X | X | X
pro-5KzChsow.jpeg | X | X | X | X | X
pro-5msmZKkB.jpeg | X | X | X | X | X
pro-52jtGarE.jpeg | X | X | X | X | X
pro-Bgg3g4fN.jpeg | X | X | X | X | X
pro-bipBu7B8.jpeg | X | X | X | X | X
pro-bMed1TAl.jpeg | X | X | X | X | X
pro-cpKSHBSF.jpeg | X | X | X | X | X
pro-DHIc9DB2.jpeg | X | X | X | X | X
pro-EOCyr0qr.jpeg | X | X | X | X | X
pro-IiUZawgC.jpeg | X | X | X | X | X
pro-IvxHRqRP.jpeg | X | X | X | X | X
pro-JYoo8Hk4.jpeg | X | X | X | X | X
pro-ndh6fA1z.jpeg | X | X | X | X | X
pro-pd2fsqBE.jpeg | X | X | X | X | X
pro-pSSDUAkO.jpeg | X | X | X | X | X
pro-QikMdu7r.jpeg | X | X | X | X | X
pro-u7KmF9Du.jpeg | X | X | X | X | X
pro-UHQPXzuv.jpeg | X | X | X | X | X
pro-v3ATLdEc.jpeg | X | X | X | X | X
pro-vOjJsLWD.jpeg | X | X | X | X | X
pro-XPAfQfdu.jpeg | X | X | X | X | X
pro-Xv6wIVFW.jpeg | X | X | X | X | X

### quagga2-1
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 9, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 11, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 10, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 10, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 9, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 10, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 10, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 10, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 10, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 11, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 10, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 9, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 11, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 10, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 10, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 11, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 10, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 10, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 12, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 10, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)

### quagga2-2
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 9, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 12, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 10, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 10, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 9, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 10, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 11, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 10, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 10, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 10, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 11, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 10, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 9, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 11, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 9, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 10, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 10, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 10, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 9, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 11, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 11, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 9, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)

### quagga2-3
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 10, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 12, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 9, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 10, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 9, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 9, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 10, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 10, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 10, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 10, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 10, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 10, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 10, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 10, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 11, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 10, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 9, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 9, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 11, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 10, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 9, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)

### quagga2-4
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 10, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 11, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 9, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 10, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 10, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 10, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 11, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 10, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 11, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 10, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 9, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 8, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 11, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 10, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 10, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 10, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 9, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 9, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 11, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 11, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)

### quagga2-5
- Hits: 0/25
- pro-0KEAw9UH.jpeg: MISS (attempts: 11, 2000ms)
- pro-1HzJls4I.jpeg: MISS (attempts: 12, 2000ms)
- pro-5j0wkf3p.jpeg: MISS (attempts: 8, 2000ms)
- pro-5KzChsow.jpeg: MISS (attempts: 9, 2000ms)
- pro-5msmZKkB.jpeg: MISS (attempts: 10, 2000ms)
- pro-52jtGarE.jpeg: MISS (attempts: 10, 2000ms)
- pro-Bgg3g4fN.jpeg: MISS (attempts: 10, 2000ms)
- pro-bipBu7B8.jpeg: MISS (attempts: 11, 2000ms)
- pro-bMed1TAl.jpeg: MISS (attempts: 9, 2000ms)
- pro-cpKSHBSF.jpeg: MISS (attempts: 9, 2000ms)
- pro-DHIc9DB2.jpeg: MISS (attempts: 10, 2000ms)
- pro-EOCyr0qr.jpeg: MISS (attempts: 11, 2000ms)
- pro-IiUZawgC.jpeg: MISS (attempts: 9, 2000ms)
- pro-IvxHRqRP.jpeg: MISS (attempts: 10, 2000ms)
- pro-JYoo8Hk4.jpeg: MISS (attempts: 9, 2000ms)
- pro-ndh6fA1z.jpeg: MISS (attempts: 10, 2000ms)
- pro-pd2fsqBE.jpeg: MISS (attempts: 10, 2000ms)
- pro-pSSDUAkO.jpeg: MISS (attempts: 10, 2000ms)
- pro-QikMdu7r.jpeg: MISS (attempts: 10, 2000ms)
- pro-u7KmF9Du.jpeg: MISS (attempts: 10, 2000ms)
- pro-UHQPXzuv.jpeg: MISS (attempts: 9, 2000ms)
- pro-v3ATLdEc.jpeg: MISS (attempts: 11, 2000ms)
- pro-vOjJsLWD.jpeg: MISS (attempts: 10, 2000ms)
- pro-XPAfQfdu.jpeg: MISS (attempts: 8, 2000ms)
- pro-Xv6wIVFW.jpeg: MISS (attempts: 8, 2000ms)
