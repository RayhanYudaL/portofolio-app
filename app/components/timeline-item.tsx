export type TimelineItemProps = {
  date: string;
  role: string;
  organization: string;
  description: string;
};

export function TimelineItem({
  date,
  role,
  organization,
  description,
}: TimelineItemProps) {
  return (
    <li className="relative pb-8 pl-8 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border border-border bg-card"
      />
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{date}</p>
      <h3 className="mt-2 text-xl font-semibold text-foreground">{role}</h3>
      <p className="mt-1 text-sm font-semibold text-foreground/80">{organization}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </li>
  );
}