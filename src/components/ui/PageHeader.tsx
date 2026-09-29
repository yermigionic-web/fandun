import { RuneCorner } from "@/components/effects/RuneCorner";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-8 scroll-mt-36">
      <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.22em] text-muted">
        <RuneCorner className="h-3.5 w-3.5" />
        {eyebrow}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
      {description ? <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{description}</p> : null}
    </header>
  );
}
