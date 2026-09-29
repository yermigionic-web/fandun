import { RuneCorner } from "@/components/effects/RuneCorner";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  action,
  className,
}: {
  eyebrow: string;
  title: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-6 flex items-end justify-between gap-4", className)}>
      <div>
        <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.22em] text-muted">
          <RuneCorner className="h-3.5 w-3.5" />
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-[1.85rem]">{title}</h2>
      </div>
      {action}
    </div>
  );
}
