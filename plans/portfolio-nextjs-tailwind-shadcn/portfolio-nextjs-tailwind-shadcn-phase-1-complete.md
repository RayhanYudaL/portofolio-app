## Phase 1 Complete: Foundation Setup

Fondasi migrasi berhasil disiapkan dengan pendekatan TDD: baseline test dibuat dan dijalankan, lalu inisialisasi shadcn serta utilitas class merge diterapkan hingga semua test dan lint lulus. Phase ini memastikan project siap untuk migrasi section dan sistem tema pada phase berikutnya.

**Files created/changed:**
- app/layout.tsx
- app/globals.css
- app/page.tsx
- package.json
- package-lock.json
- components.json
- lib/utils.ts
- vitest.config.ts
- test/setup.ts
- test/home-renders-without-template.test.tsx
- test/layout-metadata-exports.test.ts

**Functions created/changed:**
- RootLayout
- Home
- cn

**Tests created/changed:**
- home-renders-without-template.test.tsx
- layout-metadata-exports.test.ts

**Review Status:** APPROVED

**Git Commit Message:**
feat: setup foundation for portfolio migration

- initialize shadcn base config and cn utility helper
- add vitest and testing-library baseline test setup
- replace default next template with portfolio baseline shell