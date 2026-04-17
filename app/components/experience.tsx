import {
  TimelineItem,
  type TimelineItemProps,
} from "@/app/components/timeline-item";

const workExperience: TimelineItemProps[] = [
  {
    date: "Okt 2022 — Sekarang",
    role: "Frontend Developer",
    organization: "PT Swamedia Informatika",
    description:
      "Membangun antarmuka web untuk sistem klien pemerintahan dan swasta. Berhasil membantu meningkatkan trafik organik hingga 20% melalui optimasi performa dan SEO yang lebih baik.",
  },
  {
    date: "Feb 2022 — Jul 2022",
    role: "Fullstack Developer Intern",
    organization: "Binar Academy",
    description:
      "Turut mengembangkan aplikasi web rental armada menggunakan Next.js. Selain itu, ikut merancang layanan backend dan API menggunakan Express.js serta PostgreSQL.",
  },
  {
    date: "Feb 2021 — Jul 2021",
    role: "IT Staff Intern",
    organization: "PT Pos Indonesia",
    description:
      "Membantu analisis kebutuhan sistem dan merancang UI mockup. Saya juga membuat aplikasi internal untuk mempermudah rekapitulasi pelaporan divisi IT.",
  },
];

const educationAndOrganization: TimelineItemProps[] = [
  {
    date: "Sep 2018 — Des 2022",
    role: "D4 Teknik Informatika",
    organization: "Politeknik Pos Indonesia",
    description:
      "Tugas Akhir: Membangun model klasifikasi Multinomial Naive Bayes berbasis Machine Learning dan NLP untuk menganalisis sentimen terkait aset digital (NFT).",
  },
  {
    date: "2019",
    role: "Frontend Mentor",
    organization: "Morris IF 19",
    description:
      "Menjadi mentor dan fasilitator teknis bagi mahasiswa baru, mengenalkan mereka pada dasar-dasar pengembangan web frontend.",
  },
  {
    date: "2018 — 2022",
    role: "Anggota Aktif",
    organization: "Himpunan Mahasiswa Teknik Informatika",
    description:
      "Berpartisipasi aktif dalam kegiatan himpunan untuk membangun relasi dan mengasah soft skill komunikasi.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <span className="rounded-full border border-border bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
        Perjalanan Karir
      </span>

      <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">Pengalaman Kerja</h2>
          <ol
            aria-label="Timeline pengalaman kerja"
            className="relative mt-8 border-l border-border"
          >
            {workExperience.map((item) => (
              <TimelineItem key={`${item.date}-${item.role}`} {...item} />
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Pendidikan &amp; Organisasi
          </h2>
          <ol
            aria-label="Timeline pendidikan dan organisasi"
            className="relative mt-8 border-l border-border"
          >
            {educationAndOrganization.map((item) => (
              <TimelineItem key={`${item.date}-${item.role}`} {...item} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}