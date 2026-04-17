import {
  SkillItem,
  type SkillItemProps,
} from "@/app/components/skill-item";

type StatItem = {
  value: string;
  label: string;
};

const stats: StatItem[] = [
  { value: "3+", label: "Tahun Pengalaman" },
  { value: "6+", label: "Proyek Terkirim" },
  { value: "3", label: "Klien & Instansi" },
];

const skills: SkillItemProps[] = [
  { name: "PHP / Laravel", level: "Expert", proficiency: 0.92 },
  { name: "JavaScript / jQuery", level: "Expert", proficiency: 0.88 },
  { name: "HTML / CSS / Tailwind", level: "Expert", proficiency: 0.9 },
  { name: "Next.js / React", level: "Intermediate", proficiency: 0.75 },
  { name: "Express.js / Node.js", level: "Intermediate", proficiency: 0.7 },
  { name: "MySQL / PostgreSQL", level: "Advanced", proficiency: 0.8 },
];

export function About() {
  return (
    <section id="about" className="py-20">
      <span className="rounded-full border border-border bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
        Tentang Saya
      </span>

      <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
            Kode yang bersih, pengalaman yang mulus.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Halo! Saya Rayhan. Sehari-hari, saya banyak mengeksplorasi ekosistem
            JavaScript seperti Next.js dan React, serta arsitektur PHP terutama
            Laravel untuk membangun berbagai solusi digital.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Bagi saya, web development bukan cuma sekadar membuat fitur yang
            berfungsi. Saya selalu berusaha memastikan kode terstruktur dengan
            baik, mudah di-maintain, dan nyaman digunakan oleh pengguna akhir.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm text-muted">{stat.label}</dt>
                <dd className="text-3xl font-bold text-foreground">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul aria-label="Daftar keahlian" className="space-y-3">
          {skills.map((skill) => (
            <SkillItem key={skill.name} {...skill} />
          ))}
        </ul>
      </div>
    </section>
  );
}
