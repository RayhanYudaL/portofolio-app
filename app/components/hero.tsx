export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[70vh] flex-col justify-center py-16 md:min-h-[80vh] md:py-24"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Frontend Developer · Bandung, ID
      </p>
      <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
        Rayhan Yuda Lesmana · Membangun website yang cepat & responsif.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
        Seorang Frontend Developer yang berfokus membangun aplikasi web
        interaktif, rapi, dan mudah digunakan. Berpengalaman menangani proyek
        dari hulu ke hilir dengan performa yang optimal.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
        >
          Lihat Portofolio
        </a>
        <a
          href="#contact"
          className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
        >
          Hubungi Saya
        </a>
      </div>
    </section>
  );
}
