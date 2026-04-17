import {
  ArchiveCard,
  type ArchiveCardProps,
} from "@/app/components/archive-card";

const archiveProjects: ArchiveCardProps[] = [
  {
    category: "Laravel · API Gateway",
    title: "APIcentrum Publisher",
    excerpt:
      "Dashboard backend untuk mengelola API yang terintegrasi dengan API Gateway, termasuk konfigurasi policy dan pantauan penggunaan.",
    date: "Jan 2023 — Jan 2025",
    href: "#",
  },
  {
    category: "Laravel · Bootstrap",
    title: "Company Profile PT Swamedia Informatika",
    excerpt:
      "Pengembangan situs web profil perusahaan resmi dengan desain yang modern dan responsif untuk keperluan representasi korporat.",
    date: "Jun 2023 — Agu 2023",
    href: "#",
  },
  {
    category: "Laravel · jQuery",
    title: "Talent and Careers Application",
    excerpt:
      "Aplikasi internal pengelola talenta dan jenjang karir yang dilengkapi dengan fitur dan modul untuk rekrutmen pegawai.",
    date: "Okt 2022 — Feb 2023",
    href: "#",
  },
];

export function Archive() {
  return (
    <section id="blog" className="py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="rounded-full border border-border bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
            Arsip Proyek
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            Eksplorasi lainnya.
          </h2>
        </div>

        <a
          href="https://github.com/Rayhanyl"
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-accent"
        >
          Lihat GitHub
        </a>
      </div>

      <ul aria-label="Daftar arsip proyek" className="mt-8 grid gap-4 md:grid-cols-3">
        {archiveProjects.map((project) => (
          <ArchiveCard key={project.title} {...project} />
        ))}
      </ul>
    </section>
  );
}