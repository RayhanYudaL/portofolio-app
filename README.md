# portofolio-app

Project portfolio pribadi berbasis Next.js App Router.

Status saat ini:
- Migrasi dari halaman statis ke arsitektur komponen Next.js sedang berjalan.
- Foundation phase sudah selesai (setup testing, konfigurasi shadcn, metadata awal, baseline homepage).

## Tech Stack

- Next.js 16.2.3
- React 19.2.4
- TypeScript
- Tailwind CSS v4
- shadcn/ui foundation (components.json + utility helper)
- Vitest + Testing Library
- ESLint (eslint-config-next)

## Menjalankan Project

Install dependency:

```bash
npm install
```

Jalankan mode development:

```bash
npm run dev
```

Buka di browser:

http://localhost:3000

## Script yang Tersedia

- npm run dev: menjalankan aplikasi dalam mode development.
- npm run build: build production.
- npm run start: menjalankan hasil build production.
- npm run lint: cek kualitas kode dengan ESLint.
- npm run test: menjalankan unit test (Vitest).
- npm run test:watch: menjalankan test mode watch.

## Struktur Penting

- app: App Router (layout, page, global style).
- test: baseline test untuk homepage dan metadata layout.
- lib: utility helper, termasuk className merge helper.
- plans: dokumen perencanaan dan ringkasan phase implementasi.
- note: folder catatan phase tambahan (saat ini masih kosong).
- portofolio.html: referensi source halaman statis sebelum migrasi komponen selesai.

## Progres Migrasi

Dokumen plan dan phase completion:

- plans/portfolio-nextjs-tailwind-shadcn/portfolio-nextjs-tailwind-shadcn-plan.md
- plans/portfolio-nextjs-tailwind-shadcn/portfolio-nextjs-tailwind-shadcn-phase-1-complete.md

## Pengujian

Menjalankan seluruh test:

```bash
npm run test
```

Menjalankan lint:

```bash
npm run lint
```

## Catatan

Project ini bukan lagi template default create-next-app. README ini sudah disesuaikan dengan kondisi repository saat ini dan akan diperbarui seiring progres phase berikutnya.
