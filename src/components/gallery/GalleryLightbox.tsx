"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { SparkleBurst } from "@/components/effects/SparkleBurst";
import { PolaroidFrame } from "@/components/birthday/PolaroidFrame";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Modal } from "@/components/ui/Modal";
import { getHunter } from "@/data/hunters";
import { prefersReducedMotion } from "@/lib/motion";
import type { GalleryItem } from "@/types";

const aspectClass = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  film: "aspect-[4/5]",
  landscape: "aspect-[3/2]",
  polaroid: "aspect-[4/5]",
} as const;

export function GalleryLightbox({
  items,
  activeId,
  onClose,
  onActive,
}: {
  items: GalleryItem[];
  activeId: string | null;
  onClose: () => void;
  onActive: (id: string) => void;
}) {
  const [dissolving, setDissolving] = useState(false);
  const startX = useRef(0);
  const index = items.findIndex((item) => item.id === activeId);
  const item = index >= 0 ? items[index] : undefined;
  const hunter = item ? getHunter(item.hunterId) : undefined;

  const close = () => {
    if (prefersReducedMotion()) {
      onClose();
      return;
    }
    setDissolving(true);
    window.setTimeout(() => {
      setDissolving(false);
      onClose();
    }, 420);
  };

  const step = (direction: number) => {
    if (!items.length || index < 0) return;
    const next = items[(index + direction + items.length) % items.length];
    onActive(next.id);
  };

  return (
    <Modal open={Boolean(item)} title={item?.title ?? "갤러리"} onClose={close} dissolving={dissolving}>
      {item && hunter ? (
        <div
          className="surface relative p-3 sm:p-4"
          onTouchStart={(event) => {
            startX.current = event.touches[0]?.clientX ?? 0;
          }}
          onTouchEnd={(event) => {
            const dx = (event.changedTouches[0]?.clientX ?? 0) - startX.current;
            if (dx > 48) step(-1);
            if (dx < -48) step(1);
          }}
        >
          {dissolving ? <SparkleBurst className="left-1/2 top-1/2 z-10" /> : null}
          <button type="button" onClick={close} className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-sm shadow-card" aria-label="닫기">
            닫기
          </button>
          {item.aspect === "polaroid" ? (
            <PolaroidFrame caption={item.caption ?? item.title}>
              <MediaFrame src={item.src} alt={item.title} monogram={hunter.monogram} tone={hunter.theme} className="aspect-[4/5] w-full" eager />
            </PolaroidFrame>
          ) : (
            <MediaFrame src={item.src} alt={item.title} monogram={hunter.monogram} tone={hunter.theme} className={`${aspectClass[item.aspect]} max-h-[68vh] w-full rounded-[22px]`} eager />
          )}
          <div className="px-2 pb-2 pt-4">
            <p className="text-lg font-semibold">{item.title}</p>
            {item.caption ? <p className="mt-1 text-sm leading-relaxed text-muted">{item.caption}</p> : null}
            <Link href={`/hunters/${hunter.id}`} className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold">
              {hunter.nameKo} 프로필
            </Link>
            <div className="mt-2 flex items-center justify-between gap-3">
              <button type="button" className="min-h-11 rounded-full bg-soft px-4 text-sm font-semibold" onClick={() => step(-1)}>
                이전
              </button>
              <p className="text-sm text-muted">
                {index + 1} / {items.length}
              </p>
              <button type="button" className="min-h-11 rounded-full bg-soft px-4 text-sm font-semibold" onClick={() => step(1)}>
                다음
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
