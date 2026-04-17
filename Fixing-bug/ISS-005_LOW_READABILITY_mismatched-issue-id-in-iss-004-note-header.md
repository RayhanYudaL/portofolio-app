# [ISS-005] Mismatched Issue ID in ISS-004 Note Header

**Date:** 2026-04-17
**Priority:** 🟢 LOW
**Type:** Readability
**Location:** Fixing-bug/ISS-004_LOW_READABILITY_stale-phase6-verification-stats.md → document header

---

## Plain-Language Summary

Di file issue nomor 004, judul dokumen masih tertulis `[ISS-003]`. Artinya nomor issue di nama file dan nomor issue di isi dokumen tidak sama. Ini seperti label map bertuliskan "Folder 4" tetapi halaman pertamanya menulis "Folder 3", sehingga pembaca bisa bingung saat menelusuri riwayat perbaikan.

---

## Impact

Dampaknya bukan ke runtime aplikasi, tetapi ke kejelasan dokumentasi penutupan. Saat audit atau handoff, tim bisa salah referensi issue, duplikat pencatatan, atau mengira ada issue yang hilang. Hal ini mengurangi kredibilitas artefak tracking walau kodenya sudah benar.

---

## Root Cause

Kemungkinan besar terjadi karena copy-paste dari template issue sebelumnya (ISS-003) lalu judul tidak ikut diperbarui. Situasi ini umum saat finalisasi banyak dokumen dalam waktu singkat.

---

## Step-by-Step Fix

1. Buka file issue `ISS-004` dan samakan nomor issue pada judul menjadi `[ISS-004]`.
2. Lakukan pengecekan cepat pada seluruh file di folder `Fixing-bug` untuk memastikan nomor di nama file dan judul dokumen konsisten.
3. Perbarui ringkasan status jika ada referensi yang ikut terdampak.
4. Verifikasi akhir dengan review manual agar tidak ada mismatch ID tersisa.

---

## Plain-Language Explanation of the Fix

Solusinya mirip merapikan arsip fisik: nomor di sampul dan nomor di lembar pertama harus sama supaya siapa pun bisa menemukan dokumen yang benar tanpa menebak-nebak. Dengan menyamakan ID, alur pelacakan issue jadi jelas dan siap ditutup.

---

## Code Example

### Before (Problematic)
```markdown
# [ISS-003] Stale Phase 6 Verification Stats in Completion Artifact  <!-- ← ISSUE -->
```

### After (Fixed)
```markdown
# [ISS-004] Stale Phase 6 Verification Stats in Completion Artifact
```

---

## Prevention Recommendations

- [ ] Gunakan checklist finalisasi: "ID di nama file harus sama dengan ID di judul dokumen".
- [ ] Tambahkan pemeriksaan cepat otomatis (regex sederhana) untuk mendeteksi mismatch nomor issue.
- [ ] Hindari copy-paste mentah antar issue; gunakan template kosong untuk setiap issue baru.

---

## References *(optional)*

- [Markdown Guide](https://www.markdownguide.org/basic-syntax/)