## Plan: Migrasi Portfolio ke Next.js Modern

Migrasi halaman portfolio HTML statis ke arsitektur Next.js App Router dengan Tailwind CSS dan shadcn/ui, mempertahankan konten inti berbahasa Indonesia sambil meningkatkan kualitas visual, aksesibilitas, dan maintainability. Eksekusi dilakukan per phase berbasis TDD agar perubahan aman, terukur, dan mudah direview.

**Phases 6 phases**
1. **Phase 1: Foundation Setup**
    - **Objective:** Menyiapkan fondasi proyek untuk migrasi, termasuk shadcn/ui, utility helper, dan setup pengujian dasar.
    - **Files/Functions to Modify/Create:** package.json, components.json, app/globals.css, app/layout.tsx, lib/utils.ts, test/setup.ts.
    - **Tests to Write:** home-renders-without-template.test.tsx, layout-metadata-exports.test.ts.
    - **Steps:**
        1. Menulis test baseline untuk rendering halaman dan metadata, lalu menjalankan test agar gagal.
        2. Menambahkan inisialisasi shadcn/ui dan helper utilitas className.
        3. Menjalankan test ulang sampai lulus dan memastikan fondasi siap phase lanjut.

2. **Phase 2: Theme, Typography, and Design Tokens**
    - **Objective:** Membangun sistem tema dan tipografi yang lebih kuat dengan dark mode persisten dan style yang dipoles.
    - **Files/Functions to Modify/Create:** app/layout.tsx, app/globals.css, app/components/theme-provider.tsx, app/components/theme-toggle.tsx.
    - **Tests to Write:** theme-toggle-persist-localstorage.test.tsx, root-layout-loads-font-variables.test.tsx.
    - **Steps:**
        1. Menulis test untuk toggle tema dan persistence, lalu menjalankan test agar gagal.
        2. Mengimplementasikan provider tema dan token desain berbasis variabel.
        3. Menjalankan test ulang sampai lulus.

3. **Phase 3: Core Sections Migration**
    - **Objective:** Memigrasikan Navbar, Hero, About, dan Skills menjadi komponen modular.
    - **Files/Functions to Modify/Create:** app/page.tsx, app/components/navigation.tsx, app/components/hero.tsx, app/components/about.tsx, app/components/skill-item.tsx.
    - **Tests to Write:** navigation-renders-links-and-mobile-toggle.test.tsx, hero-cta-links.test.tsx, about-stats-and-skills-render.test.tsx.
    - **Steps:**
        1. Menulis test section inti dan behavior menu mobile, jalankan agar gagal.
        2. Mengimplementasikan komponen inti dan menyusun di halaman utama.
        3. Menjalankan test ulang sampai lulus.

4. **Phase 4: Projects, Experience, and Archive**
    - **Objective:** Memigrasikan section proyek, timeline pengalaman, dan arsip menggunakan komponen reusable.
    - **Files/Functions to Modify/Create:** app/components/projects.tsx, app/components/project-card.tsx, app/components/experience.tsx, app/components/timeline-item.tsx, app/components/archive.tsx, app/components/archive-card.tsx, app/page.tsx.
    - **Tests to Write:** projects-featured-card-render.test.tsx, experience-timeline-items-render.test.tsx, archive-cards-render.test.tsx.
    - **Steps:**
        1. Menulis test untuk seluruh section data-driven, lalu jalankan agar gagal.
        2. Mengimplementasikan komponen reusable dan integrasi.
        3. Menjalankan test ulang sampai lulus.

5. **Phase 5: Contact, Footer, and Interactions**
    - **Objective:** Mengimplementasikan contact section dengan notifikasi sukses dan email intent, footer, serta interaksi reveal.
    - **Files/Functions to Modify/Create:** app/components/contact.tsx, app/components/footer.tsx, app/components/reveal.tsx, app/page.tsx.
    - **Tests to Write:** contact-form-submit-state.test.tsx, footer-links-render.test.tsx, reveal-component-adds-visible-class-on-intersect.test.tsx.
    - **Steps:**
        1. Menulis test behavior form dan footer, lalu jalankan agar gagal.
        2. Mengimplementasikan komponen contact dan interaksi sesuai kebutuhan.
        3. Menjalankan test ulang sampai lulus.

6. **Phase 6: Final Integration and Documentation**
    - **Objective:** Menyelesaikan integrasi akhir, verifikasi kualitas, dan dokumentasi phase di folder note serta plans.
    - **Files/Functions to Modify/Create:** app/page.tsx, note/phase-1-foundation.md, note/phase-2-theme.md, note/phase-3-core-sections.md, note/phase-4-data-sections.md, note/phase-5-contact-motion.md, note/phase-6-finalization.md.
    - **Tests to Write:** app-page-full-section-smoke.test.tsx.
    - **Steps:**
        1. Menulis smoke test final, lalu jalankan agar gagal.
        2. Menyelesaikan penyusunan akhir section dan aksesibilitas.
        3. Menjalankan lint, build, dan test; lalu menulis dokumen phase.

**Open Questions 1 question**
1. URL project saat ini menggunakan URL sementara; penggantian ke URL final akan dilakukan saat data URL real sudah diberikan.