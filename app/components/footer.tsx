export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-background" aria-label="Footer">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted">
          © 2026 Rayhan Yuda Lesmana - Dibuat di Bandung, Indonesia
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-foreground">
          <a href="#hero" className="transition hover:text-muted">
            Atas
          </a>
          <a
            href="https://github.com/Rayhanyl"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-muted"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rayhanyl"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-muted"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}