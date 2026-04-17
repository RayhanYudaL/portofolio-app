import {
  ProjectCard,
  type ProjectCardProps,
} from "@/app/components/project-card";

const projects: ProjectCardProps[] = [
  {
    indexLabel: "01 — Featured",
    title: "APIcentrum Portal",
    description:
      "Portal web publik yang menyajikan katalog API dan dokumentasi interaktif. Dirancang dengan antarmuka yang bersih agar mudah ditelusuri dan informatif bagi para developer.",
    tags: ["Laravel", "jQuery", "Bootstrap", "PHP"],
    href: "#",
    featured: true,
  },
  {
    indexLabel: "02",
    title: "Loccana",
    description:
      "Berfokus pada perbaikan bug, merapikan kode lama (refactoring) agar strukturnya lebih modern, dan menambahkan interaksi UI baru menggunakan jQuery.",
    tags: ["CodeIgniter", "PHP", "jQuery"],
    href: "#",
  },
  {
    indexLabel: "03",
    title: "APIcentrum DevPortal",
    description:
      "Portal khusus bagi developer untuk mengelola aplikasi klien, mengatur langganan API, dan menghasilkan kredensial akses dengan aman.",
    tags: ["Laravel Framework", "JavaScript"],
    href: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="rounded-full border border-border bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
            Portofolio
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            Proyek pilihan.
          </h2>
        </div>

        <a
          href="#blog"
          className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-accent"
        >
          Lihat Proyek Lainnya
        </a>
      </div>

      <ul aria-label="Daftar proyek portofolio" className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ul>
    </section>
  );
}