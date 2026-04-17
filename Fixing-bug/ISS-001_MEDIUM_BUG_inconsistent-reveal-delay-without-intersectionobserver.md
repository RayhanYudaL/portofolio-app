# [ISS-001] Inconsistent Reveal Delay Without IntersectionObserver

**Date:** 2026-04-17
**Priority:** 🟡 MEDIUM
**Type:** Bug
**Location:** app/components/reveal.tsx → Reveal()

---

## Plain-Language Summary

Komponen Reveal saat ini punya dua jalur perilaku. Jika browser mendukung IntersectionObserver, properti delayMs dipakai. Namun jika fitur itu tidak tersedia, komponen langsung tampil di frame berikutnya dan delayMs diabaikan. Akibatnya, pengalaman animasi jadi tidak konsisten antar lingkungan, seperti tombol lampu otomatis yang kadang pakai timer dan kadang langsung menyala.

---

## Impact

Dampaknya paling terasa di lingkungan fallback (browser lama, webview tertentu, atau environment test tertentu): transisi tampil terlalu cepat dan urutan animasi antar section bisa berubah. Ini bisa menurunkan kualitas UX dan membuat hasil pengujian visual/behavioral tidak stabil antar platform.

---

## Root Cause

Kemungkinan besar ini terjadi karena fokus utama adalah memastikan fallback tetap aman dan lolos build, sehingga logika delay pada jalur fallback tidak ikut disamakan. Secara teknis, cabang fallback hanya memakai requestAnimationFrame tanpa mempertimbangkan delayMs.

---

## Step-by-Step Fix

1. Samakan kontrak perilaku Reveal untuk semua jalur eksekusi, termasuk fallback tanpa IntersectionObserver.
2. Di cabang fallback, terapkan delayMs juga (misalnya setTimeout untuk delay > 0, requestAnimationFrame untuk delay 0).
3. Tambahkan pengujian khusus fallback untuk memastikan delay bekerja saat IntersectionObserver tidak ada.
4. Jalankan ulang npm run test, npm run lint, dan npm run build untuk memastikan tidak ada regresi.

---

## Plain-Language Explanation of the Fix

Perbaikannya seperti menyamakan SOP di semua cabang toko: pelanggan harus mendapat layanan yang sama, walau kasirnya berbeda. Dalam konteks ini, meskipun browser tidak punya IntersectionObserver, animasi tetap mengikuti jeda yang diminta agar perilaku UI konsisten.

---

## Code Example

### Before (Problematic)
```tsx
if (typeof window.IntersectionObserver === "undefined") {
  const frameId = window.requestAnimationFrame(() => {
    setIsVisible(true); // ← ISSUE
  });

  return () => {
    window.cancelAnimationFrame(frameId);
  };
}
```

### After (Fixed)
```tsx
if (typeof window.IntersectionObserver === "undefined") {
  if (delayMs > 0) {
    const timeoutId = window.setTimeout(() => {
      setIsVisible(true); // keep behavior aligned with observer path
    }, delayMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }

  const frameId = window.requestAnimationFrame(() => {
    setIsVisible(true);
  });

  return () => {
    window.cancelAnimationFrame(frameId);
  };
}
```

---

## Prevention Recommendations

- [ ] Tambahkan checklist review: "perilaku fallback harus setara dengan jalur utama" untuk komponen interaktif.
- [ ] Buat unit test untuk semua cabang logika utama dan fallback, bukan hanya happy path.
- [ ] Dokumentasikan kontrak props penting (seperti delayMs) agar maknanya tidak berubah antar environment.

---

## References *(optional)*

- [MDN IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [MDN requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
