import { RuneRing } from "@/components/effects/RuneRing";
import type { Rank } from "@/types";

export function RankBadge({ rank, label }: { rank: Rank | null; label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-soft px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-ink" aria-label={label}>
      {rank === "S" ? <RuneRing className="h-3.5 w-3.5" /> : null}
      {label}
    </span>
  );
}
