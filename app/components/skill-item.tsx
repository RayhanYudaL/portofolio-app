export type SkillLevel = "Expert" | "Advanced" | "Intermediate";

export type SkillItemProps = {
  name: string;
  level: SkillLevel;
  proficiency: number;
};

export function SkillItem({ name, level, proficiency }: SkillItemProps) {
  const clampedProficiency = Math.max(0, Math.min(1, proficiency));

  return (
    <li className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <span className="text-xs font-semibold uppercase tracking-wide text-muted">
          {level}
        </span>
      </div>
      <div
        aria-hidden="true"
        className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-accent"
      >
        <span
          className="block h-full rounded-full bg-foreground"
          style={{ width: `${clampedProficiency * 100}%` }}
        />
      </div>
    </li>
  );
}
