"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RuneCorner } from "@/components/effects/RuneCorner";
import { MagicRipple } from "@/components/effects/MagicRipple";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { getHunter } from "@/data/hunters";
import { cn } from "@/lib/cn";
import { prefersReducedMotion } from "@/lib/motion";
import type { Gallery } from "@/types";

const aspect = {
  editorial: "aspect-[3/4]",
  playful: "aspect-square",
  retro: "aspect-[4/5]",
  candid: "aspect-[3/2]",
  polaroid: "aspect-[4/5]",
} as const;

export function GalleryCard({
  gallery,
  count,
  index = 0,
  total = 5,
  featured = false,
}: {
  gallery: Gallery;
  count: number;
  index?: number;
  total?: number;
  featured?: boolean;
}) {
  const router = useRouter();
  const hunter = getHunter(gallery.coverHunterId);
  const [ripple, setRipple] = useState<{ x: number; y: number; key: number } | null>(null);
  const label = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <Link
      href={`/gallery/${gallery.id}`}
      className={cn(
        "exhibit-card portal-card surface relative block h-full overflow-hidden",
        gallery.mood === "playful" && "mood-playful rounded-[32px]",
        gallery.mood === "retro" && "mood-retro",
        gallery.mood === "candid" && "mood-candid",
        gallery.mood === "polaroid" && "mood-polaroid",
        gallery.mood === "editorial" && "mood-editorial",
      )}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0 || prefersReducedMotion()) return;
        event.preventDefault();
        const rect = event.currentTarget.getBoundingClientRect();
        setRipple({ x: event.clientX - rect.left, y: event.clientY - rect.top, key: Date.now() });
        window.setTimeout(() => router.push(`/gallery/${gallery.id}`), 280);
      }}
    >
      {ripple ? <MagicRipple key={ripple.key} x={ripple.x} y={ripple.y} /> : null}
      <RuneCorner className="absolute right-3 top-3 z-10 h-9 w-9 opacity-70" />
      <div className={cn("exhibit-media relative", gallery.mood === "polaroid" && "bg-white p-2.5 pb-5", gallery.mood === "playful" && "p-1.5")}>
        <MediaFrame
          src={gallery.cover}
          alt=""
          monogram={hunter?.monogram}
          tone={hunter?.theme}
          className={cn(featured && gallery.mood === "editorial" ? "aspect-[4/5] sm:aspect-[3/4]" : aspect[gallery.mood], "w-full rounded-[22px]")}
        />
        {gallery.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] shadow-sm">
            {gallery.badge === "NEW" ? "NEW ✦" : gallery.badge}
          </span>
        ) : null}
      </div>
      <div className="exhibit-copy space-y-1 p-4">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-muted">{label}</p>
        <h3 className={cn("text-lg font-semibold", gallery.mood === "editorial" && "font-editorial text-2xl font-medium italic")}>{gallery.title}</h3>
        <p className="text-sm text-muted">{gallery.subtitle}</p>
        <p className="flex items-center justify-between pt-1 text-xs tracking-[0.08em] text-muted">
          <span>{count}장</span>
          <span className="exhibit-arrow grid h-8 w-8 place-items-center rounded-full bg-white/80 text-sm text-ink" aria-hidden="true">
            →
          </span>
        </p>
      </div>
    </Link>
  );
}
