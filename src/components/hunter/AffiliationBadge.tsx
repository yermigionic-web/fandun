import { OrgLogo } from "@/components/hunter/OrgLogo";
import { cn } from "@/lib/cn";
import type { Affiliation } from "@/types";

export function AffiliationBadge({
  affiliation,
  logo,
  className,
}: {
  affiliation: Affiliation;
  logo?: string;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold tracking-[0.12em] text-ink", className)}>
      {logo ? (
        <OrgLogo src={logo} size={20} />
      ) : (
        <span className="grid h-5 w-5 place-items-center rounded-full border border-current text-[8px]" aria-hidden="true">
          {affiliation.mark}
        </span>
      )}
      {affiliation.ko}
    </span>
  );
}
