# [ISS-004] Stale Phase 6 Verification Stats in Completion Artifact

**Date:** 2026-04-17
**Priority:** 🟢 LOW
**Type:** Readability
**Location:** plans/portfolio-nextjs-tailwind-shadcn/portfolio-nextjs-tailwind-shadcn-phase-6-complete.md → Verification

---

## Plain-Language Summary

Dokumen penutup Phase 6 masih menampilkan angka hasil test yang sudah tidak sesuai dengan kondisi terbaru proyek. Ibarat papan informasi di lobi yang belum diperbarui, isi informasinya masih bagus secara umum, tetapi angka detailnya membuat pembaca bisa salah paham terhadap status terkini.

---

## Impact

Dampak utamanya ada pada kepercayaan dokumentasi: reviewer lain atau pemangku kepentingan bisa mengira jumlah test masih 21, padahal sekarang sudah 22. Ini tidak merusak aplikasi, tetapi menurunkan akurasi jejak audit engineering dan bisa memicu pertanyaan saat handoff atau review berikutnya.

---

## Root Cause

Kemungkinan besar issue ini muncul karena perbaikan terakhir menambah/menyesuaikan test Reveal fallback setelah artifact phase-6 disusun, tetapi dokumen ringkasan tidak ikut disinkronkan. Ini umum terjadi saat perubahan cepat menjelang finalisasi.

---

## Step-by-Step Fix

1. Perbarui bagian Verification pada dokumen phase-6 agar jumlah test sesuai hasil terbaru.
2. Tambahkan file test Reveal yang ikut berubah ke bagian Tests created/changed agar jejak perubahan lengkap.
3. Jalankan kembali npm run test untuk memastikan angka yang dicantumkan konsisten dengan output aktual.
4. Terapkan checklist rilis ringan: setiap perubahan test wajib sinkronkan ringkasan dokumentasi phase.

---

## Plain-Language Explanation of the Fix

Perbaikannya sederhana: samakan angka dan daftar test di dokumen dengan kondisi nyata proyek sekarang. Seperti memperbarui laporan stok setelah barang baru masuk, tujuannya agar semua orang membaca data yang sama dan tidak terjadi salah asumsi saat pengambilan keputusan.

---

## Code Example

### Before (Problematic)
```markdown
**Tests created/changed:**
- app-page-full-section-smoke.test.tsx

**Verification:**
- npm run test: PASS (14 files, 21 tests)  <!-- ← ISSUE -->
- npm run lint: PASS
- npm run build: PASS
```

### After (Fixed)
```markdown
**Tests created/changed:**
- app-page-full-section-smoke.test.tsx
- reveal-component-adds-visible-class-on-intersect.test.tsx  <!-- keep artifact complete -->

**Verification:**
- npm run test: PASS (14 files, 22 tests)  <!-- sync with latest run -->
- npm run lint: PASS
- npm run build: PASS
```

---

## Prevention Recommendations

- [ ] Tambahkan langkah "sync verification numbers" di Definition of Done tiap phase.
- [ ] Saat ada perubahan test setelah review, wajib update artifact phase terkait sebelum merge.
- [ ] Gunakan template catatan phase yang memisahkan data statis dan data hasil run terbaru agar mudah dicek.

---

## References *(optional)*

- [Vitest CLI Guide](https://vitest.dev/guide/cli.html)
