"use client";

import Link from "next/link";
import { RuneCorner } from "@/components/effects/RuneCorner";
import { AffiliationBadge } from "@/components/hunter/AffiliationBadge";
import { OrgLogo } from "@/components/hunter/OrgLogo";
import { RankBadge } from "@/components/hunter/RankBadge";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { useHunterTheme } from "@/context/ThemeProvider";
import { getOrganization } from "@/data/organizations";
import { cn } from "@/lib/cn";
import type { Hunter } from "@/types";

export function HunterCard({ hunter, variant = "profile" }: { hunter: Hunter; variant?: "picker" | "profile" | "compact" }) {
  const { hunterId, selectHunter } = useHunterTheme();
  const selected = hunterId === hunter.id;
  const organization = getOrganization(hunter.organizationId);
  const accent = (
    <span
      className="block h-1.5 w-12 rounded-full"
      style={{ background: `linear-gradient(90deg, ${hunter.theme.primary}, ${hunter.theme.secondary})` }}
    />
  );

  if (variant === "compact") {
    return (
      <Link href={`/hunters/${hunter.id}`} className="surface flex w-[280px] shrink-0 snap-center items-center gap-3 p-3">
        <MediaFrame
          src={hunter.images.profile}
          alt=""
          monogram={hunter.monogram}
          tone={hunter.theme}
          className="h-20 w-20 shrink-0 rounded-[20px]"
        />
        <span className="min-w-0">
          {accent}
          <span className="mt-2 block truncate font-semibold">{selected ? `✦ ${hunter.nameKo}` : hunter.nameKo}</span>
          <span className="mt-1 flex items-center gap-1.5 truncate text-xs text-muted">
            <OrgLogo src={organization.logo} size={18} />
            {hunter.rankLabel} · {hunter.affiliation.ko}
          </span>
          {hunter.position !== hunter.affiliation.ko ? (
            <span className="block truncate text-xs text-muted">{hunter.position}</span>
          ) : null}
        </span>
      </Link>
    );
  }

  const visual = (
    <MediaFrame
      src={variant === "picker" ? hunter.images.standing : hunter.images.profile}
      alt=""
      monogram={hunter.monogram}
      silhouette={variant === "picker" ? hunter.silhouette : undefined}
      tone={hunter.theme}
      align={variant === "picker" ? "bottom" : "center"}
      className={variant === "picker" ? "aspect-[3/4] w-full" : "aspect-square w-full"}
    />
  );

  const meta = (
    <div className="space-y-3 p-4">
      {accent}
      <div>
        <p className="text-lg font-semibold">{selected ? `✦ ${hunter.nameKo}` : hunter.nameKo}</p>
        <p className="text-sm text-muted">{hunter.nameEn}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <RankBadge rank={hunter.rank} label={hunter.rankLabel} />
        <AffiliationBadge affiliation={hunter.affiliation} logo={organization.logo} />
      </div>
      {hunter.position !== hunter.affiliation.ko ? <p className="text-sm text-muted">{hunter.position}</p> : null}
      <p className="text-sm leading-relaxed text-muted">{variant === "profile" ? hunter.description : hunter.fandomName}</p>
    </div>
  );

  if (variant === "picker") {
    return (
      <article className={cn("portal-card surface relative flex h-full flex-col overflow-hidden", selected && "ring-2 ring-secondary")}>
        <RuneCorner className="absolute right-3 top-3 z-10 h-8 w-8 opacity-70" />
        {selected ? <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] shadow-sm">MY HUNTER</span> : null}
        <button type="button" onClick={() => selectHunter(hunter.id)} aria-pressed={selected} className="block w-full text-left">
          {visual}
          {meta}
        </button>
        <div className="px-4 pb-4">
          <Link href={`/hunters/${hunter.id}`} className="inline-flex min-h-11 items-center text-sm font-semibold text-ink">
            프로필 보기
          </Link>
        </div>
      </article>
    );
  }

  return (
    <Link href={`/hunters/${hunter.id}`} className="portal-card surface relative flex h-full flex-col overflow-hidden">
      <RuneCorner className="absolute right-3 top-3 z-10 h-8 w-8 opacity-60" />
      {visual}
      {meta}
    </Link>
  );
}
