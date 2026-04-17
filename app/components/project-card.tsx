export type ProjectCardProps = {
  indexLabel: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  featured?: boolean;
};

export function ProjectCard({
  indexLabel,
  title,
  description,
  tags,
  href,
  featured = false,
}: ProjectCardProps) {
  return (
    <li className={featured ? "md:col-span-2" : undefined}>
      <article
        className={[
          "rounded-lg border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow",
          featured ? "grid gap-6 md:grid-cols-2 md:items-center" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            {indexLabel}
          </p>
          <h3 className="mt-3 text-2xl font-bold leading-tight text-foreground">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

          <ul
            aria-label={`Teknologi ${title}`}
            className="mt-4 flex flex-wrap gap-2"
          >
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-border bg-accent px-2.5 py-1 text-xs font-semibold text-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>

          <a
            href={href}
            className="mt-5 inline-flex text-sm font-semibold text-foreground underline-offset-4 transition hover:underline"
          >
            Detail Proyek
          </a>
        </div>

        {featured ? (
          <div
            aria-hidden="true"
            className="rounded-md border border-border bg-background p-5"
          >
            <div className="h-2 w-full rounded bg-border/70" />
            <div className="mt-3 h-2 w-3/4 rounded bg-border/70" />
            <div className="mt-3 h-2 w-5/6 rounded bg-border/70" />
            <div className="mt-3 h-2 w-2/3 rounded bg-border/70" />
          </div>
        ) : null}
      </article>
    </li>
  );
}