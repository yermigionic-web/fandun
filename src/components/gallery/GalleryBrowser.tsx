"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { PolaroidFrame } from "@/components/birthday/PolaroidFrame";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { itemHunterIds } from "@/data/galleryItems";
import { getHunter } from "@/data/hunters";
import { cn } from "@/lib/cn";
import type { Gallery, GalleryItem, HunterId } from "@/types";

const aspectClass = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  film: "aspect-[4/5]",
  landscape: "aspect-[3/2]",
  polaroid: "aspect-[4/5]",
} as const;

export function GalleryBrowser({ gallery, items }: { gallery: Gallery; items: GalleryItem[] }) {
  const [hunterId, setHunterId] = useState<HunterId | "all">("all");
  const [tag, setTag] = useState("all");
  const [affiliation, setAffiliation] = useState("all");
  const [activeId, setActiveId] = useState<string | null>(null);

  const hunters = useMemo(() => {
    const map = new Map<HunterId, ReturnType<typeof getHunter>>();
    items.forEach((item) => {
      itemHunterIds(item).forEach((id) => map.set(id, getHunter(id)));
    });
    return Array.from(map.values()).flatMap((hunter) => (hunter ? [hunter] : []));
  }, [items]);

  const tags = useMemo(() => Array.from(new Set(items.flatMap((item) => item.tags))), [items]);
  const affiliations = useMemo(() => Array.from(new Set(hunters.map((hunter) => hunter.affiliation.ko))), [hunters]);

  const filtered = items.filter((item) => {
    const ids = itemHunterIds(item);
    const linked = ids.flatMap((id) => {
      const hunter = getHunter(id);
      return hunter ? [hunter] : [];
    });
    const hunterOk = hunterId === "all" || ids.includes(hunterId);
    const tagOk = tag === "all" || item.tags.includes(tag);
    const affiliationOk = affiliation === "all" || linked.some((hunter) => hunter.affiliation.ko === affiliation);
    return hunterOk && tagOk && affiliationOk;
  });

  return (
    <div>
      <div className="space-y-3">
        <ChipRow label="헌터">
          <Chip active={hunterId === "all"} onClick={() => setHunterId("all")}>
            전체
          </Chip>
          {hunters.map((hunter) => (
            <Chip key={hunter.id} active={hunterId === hunter.id} onClick={() => setHunterId(hunter.id)}>
              {hunter.nameKo}
            </Chip>
          ))}
        </ChipRow>
        <ChipRow label="소속">
          <Chip active={affiliation === "all"} onClick={() => setAffiliation("all")}>
            전체
          </Chip>
          {affiliations.map((name) => (
            <Chip key={name} active={affiliation === name} onClick={() => setAffiliation(name)}>
              {name}
            </Chip>
          ))}
        </ChipRow>
        <ChipRow label="태그">
          <Chip active={tag === "all"} onClick={() => setTag("all")}>
            전체
          </Chip>
          {tags.map((name) => (
            <Chip key={name} active={tag === name} onClick={() => setTag(name)}>
              {name}
            </Chip>
          ))}
        </ChipRow>
      </div>
      <p className="mb-4 mt-6 text-sm text-muted">{filtered.length}장</p>
      {gallery.mood === "retro" ? <p className="mb-4 font-display text-xs tracking-[0.28em] text-muted">SEOUL / 1999 / ARCHIVE</p> : null}
      {filtered.length === 0 ? (
        <div className="surface px-5 py-10 text-center">
          <p className="text-sm text-muted">이 조합의 아카이브가 아직 없어요.</p>
          <button
            type="button"
            className="mt-3 min-h-11 text-sm font-semibold"
            onClick={() => {
              setHunterId("all");
              setTag("all");
              setAffiliation("all");
            }}
          >
            필터 지우기
          </button>
        </div>
      ) : (
        <div className={cn("grid gap-4", gallery.mood === "playful" ? "grid-cols-2 md:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3")}>
          {filtered.map((item) => {
            const hunter = getHunter(item.hunterId);
            if (!hunter) return null;
            const frame = (
              <MediaFrame
                src={item.src}
                alt={item.title}
                monogram={hunter.monogram}
                tone={hunter.theme}
                className={cn(aspectClass[item.aspect], "w-full", gallery.mood !== "polaroid" && "rounded-[22px]")}
              />
            );
            return (
              <div key={item.id} className="exhibit-card portal-card">
                <button type="button" onClick={() => setActiveId(item.id)} className="block w-full text-left">
                  {gallery.mood === "polaroid" ? (
                    <PolaroidFrame caption={item.title}>{frame}</PolaroidFrame>
                  ) : gallery.mood === "retro" ? (
                    <div className="film-frame rounded-[18px] py-3">{frame}</div>
                  ) : (
                    frame
                  )}
                  {gallery.mood !== "polaroid" ? (
                    <span className="mt-3 block">
                      <span className={cn("block font-semibold", gallery.mood === "editorial" && "font-editorial text-xl italic")}>{item.title}</span>
                      {item.caption ? <span className="mt-1 block whitespace-pre-line text-sm text-muted">{item.caption}</span> : null}
                    </span>
                  ) : null}
                </button>
                {gallery.mood !== "polaroid" ? (
                  <Link href={`/hunters/${hunter.id}`} className="inline-flex min-h-11 items-center px-1 text-sm font-semibold">
                    {hunter.nameKo}
                  </Link>
                ) : null}
              </div>
            );
          })}
        </div>
      )}
      <GalleryLightbox items={filtered} activeId={activeId} onClose={() => setActiveId(null)} onActive={setActiveId} />
    </div>
  );
}

function ChipRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-[11px] font-semibold tracking-[0.16em] text-muted">{label}</p>
      <div className="no-scrollbar flex gap-2 overflow-x-auto">{children}</div>
    </div>
  );
}

function Chip({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex min-h-11 shrink-0 items-center rounded-full px-3.5 text-sm font-semibold",
        active ? "bg-white text-ink shadow-card ring-1 ring-primary" : "bg-white/60 text-muted",
      )}
    >
      {children}
    </button>
  );
}
