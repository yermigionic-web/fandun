"use client";

import { useState } from "react";
import Link from "next/link";
import { PolaroidFrame } from "@/components/birthday/PolaroidFrame";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Modal } from "@/components/ui/Modal";
import { getHunter } from "@/data/hunters";
import type { BirthdayCafeEvent } from "@/types";

export function BirthdayCafeCard({ event }: { event: BirthdayCafeEvent }) {
  const hunter = getHunter(event.hunterId);
  const [open, setOpen] = useState(false);
  if (!hunter) return null;

  return (
    <article className="surface overflow-hidden">
      <MediaFrame src={event.image} alt="" monogram={hunter.monogram} tone={hunter.theme} className="aspect-[16/10] w-full" />
      <div className="space-y-3 p-5">
        <div className="flex flex-wrap items-center gap-2">
          {event.visited ? <span className="rounded-full bg-soft px-2.5 py-1 text-[11px] font-semibold">본인 방문</span> : null}
          <span className="text-xs text-muted">{hunter.fandomName}</span>
        </div>
        <div>
          <p className="text-sm text-muted">{hunter.nameKo}</p>
          <h3 className="text-xl font-semibold">{event.title}</h3>
        </div>
        <p className="text-sm">{event.location}</p>
        <p className="text-sm text-muted">{event.dates}</p>
        <ul className="flex flex-wrap gap-2">
          {event.benefits.map((benefit) => (
            <li key={benefit} className="rounded-full bg-cream px-3 py-1 text-xs">
              {benefit}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <li key={tag} className="text-[11px] font-semibold tracking-[0.08em] text-muted">
              {tag}
            </li>
          ))}
        </ul>
        {event.note ? <p className="whitespace-pre-line text-sm leading-relaxed text-muted">{event.note}</p> : null}
        <div className="flex flex-wrap gap-2 pt-1">
          <Link href={`/hunters/${hunter.id}`} className="inline-flex min-h-11 items-center rounded-full bg-white/80 px-4 text-sm font-semibold">
            헌터 보기
          </Link>
          {event.visited && event.signedPolaroid ? (
            <Button variant="soft" onClick={() => setOpen(true)}>
              본인 방문 인증
            </Button>
          ) : null}
        </div>
      </div>
      <Modal open={open} title={`${hunter.nameKo} 사인 폴라로이드`} onClose={() => setOpen(false)}>
        <PolaroidFrame caption={`${hunter.nameKo}의 사인`}>
          <MediaFrame
            src={event.signedPolaroid}
            alt={`${hunter.nameKo} 사인 폴라로이드`}
            monogram={hunter.monogram}
            silhouette={hunter.silhouette}
            tone={hunter.theme}
            align="bottom"
            className="aspect-[4/5] w-full"
            eager
          />
        </PolaroidFrame>
      </Modal>
    </article>
  );
}
