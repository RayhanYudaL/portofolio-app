# [ISS-002] Brittle Home Smoke Test Coupled to Copy Text

**Date:** 2026-04-17
**Priority:** 🟢 LOW
**Type:** Best Practice
**Location:** test/app-page-full-section-smoke.test.tsx → home page full section smoke

---

## Plain-Language Summary

Smoke test halaman Home saat ini sangat bergantung pada teks heading yang spesifik. Secara fungsi memang benar, tetapi test jadi rapuh: perubahan kata-kata kecil (copywriting) bisa membuat CI gagal, padahal struktur section dan alur halaman masih sehat. Ini seperti inspeksi gedung yang gagal hanya karena cat dinding diganti, bukan karena fondasinya retak.

---

## Impact

Tim bisa menerima false alarm saat ada update konten, sehingga waktu habis untuk memperbaiki test yang sebenarnya tidak mewakili kerusakan fungsional. Dalam jangka panjang, kepercayaan pada test suite bisa menurun karena terlalu sering gagal karena alasan non-kritis.

---

## Root Cause

Kemungkinan terjadi karena kebutuhan validasi cepat saat final integration, sehingga assertion dipusatkan ke heading text yang terlihat jelas. Pendekatan ini mudah ditulis, tetapi kurang tahan terhadap perubahan konten yang wajar.

---

## Step-by-Step Fix

1. Pertahankan sebagian assertion penting berbasis role, tetapi kurangi ketergantungan pada teks heading yang terlalu spesifik.
2. Tambahkan assertion berbasis struktur/landmark yang lebih stabil (misalnya keberadaan section ID utama seperti #about, #projects, #experience, #contact).
3. Sisakan satu atau dua assertion teks kunci sebagai sanity check copy penting, bukan seluruh section.
4. Verifikasi ulang bahwa test tetap menangkap regresi layout nyata tanpa sering gagal karena perubahan redaksi.

---

## Plain-Language Explanation of the Fix

Tujuannya adalah membuat test memeriksa "kerangka rumah" dulu, bukan "warna cat". Kalau judul section berubah sedikit untuk kebutuhan marketing, test tidak langsung merah. Tapi kalau section hilang atau urutan besar rusak, test tetap menangkap masalahnya.

---

## Code Example

### Before (Problematic)
```tsx
expect(
  screen.getByRole("heading", {
    level: 2,
    name: /kode yang bersih, pengalaman yang mulus/i, // ← ISSUE
  }),
).toBeInTheDocument();

expect(
  screen.getByRole("heading", {
    level: 2,
    name: /mari ngobrol\s*&\s*bekerja sama/i, // ← ISSUE
  }),
).toBeInTheDocument();
```

### After (Fixed)
```tsx
expect(screen.getByRole("navigation", { name: /navigasi utama/i })).toBeInTheDocument();
expect(document.querySelector("#about")).toBeInTheDocument(); // stable section anchor
expect(document.querySelector("#projects")).toBeInTheDocument();
expect(document.querySelector("#experience")).toBeInTheDocument();
expect(document.querySelector("#contact")).toBeInTheDocument();
expect(screen.getByRole("contentinfo", { name: /footer/i })).toBeInTheDocument();
```

---

## Prevention Recommendations

- [ ] Definisikan standar smoke test: fokus ke struktur besar, bukan detail copy penuh.
- [ ] Pisahkan test konten/copy ke test khusus agar perubahan redaksi tidak mengganggu smoke suite.
- [ ] Review berkala test yang sering flaky atau sering gagal karena alasan non-fungsional.

---

## References *(optional)*

- [Testing Library Guiding Principles](https://testing-library.com/docs/guiding-principles)
- [Kent C. Dodds - Avoiding brittle tests](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
