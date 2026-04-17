export type ArchiveCardProps = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
};

export function ArchiveCard({
  category,
  title,
  excerpt,
  date,
  href,
}: ArchiveCardProps) {
  return (
    <li>
      <article className="h-full rounded-lg border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground/80">
          {category}
        </p>
        <h3 className="mt-3 text-xl font-semibold leading-tight text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{excerpt}</p>
        <p className="mt-5 text-sm font-medium text-muted">{date}</p>
        <a
          href={href}
          className="mt-4 inline-flex text-sm font-semibold text-foreground underline-offset-4 transition hover:underline"
        >
          Detail Proyek
        </a>
      </article>
    </li>
  );
}