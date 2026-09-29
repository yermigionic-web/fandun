"use client";

import { useState } from "react";
import { RuneRing } from "@/components/effects/RuneRing";
import { SparkleBurst } from "@/components/effects/SparkleBurst";
import { PhotocardFace, RarityMark } from "@/components/photocards/PhotocardFace";
import { Button, ButtonLink } from "@/components/ui/Button";
import { drawPhotocard, photocards } from "@/data/photocards";
import { getHunter } from "@/data/hunters";
import { addToBinder } from "@/lib/storage";
import { cn } from "@/lib/cn";
import { prefersReducedMotion } from "@/lib/motion";
import { useBinderIds } from "@/lib/useBinder";
import { useMounted } from "@/lib/useMounted";
import type { Photocard } from "@/types";

type Phase = "sealed" | "opening" | "revealed";

export function PhotocardPack() {
  const ids = useBinderIds();
  const mounted = useMounted();
  const [phase, setPhase] = useState<Phase>("sealed");
  const [card, setCard] = useState<Photocard | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [toast, setToast] = useState(false);
  const owned = mounted ? ids.length : null;
  const progress = owned === null ? 0 : (owned / photocards.length) * 100;
  const hunter = card ? getHunter(card.hunterId) : undefined;

  const open = () => {
    if (phase === "opening") return;
    const next = drawPhotocard();
    const fresh = addToBinder(next.id);
    setCard(next);
    setIsNew(fresh);
    setToast(false);
    if (prefersReducedMotion()) {
      setPhase("revealed");
      setToast(fresh);
      return;
    }
    setPhase("opening");
    window.setTimeout(() => {
      setPhase("revealed");
      setToast(fresh);
    }, 680);
  };

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="flex flex-col items-center">
        {phase !== "revealed" ? (
          <div className="pack-stage relative">
            <span className="pack-leak" aria-hidden="true" />
            <button
              type="button"
              onClick={open}
              className={cn("pack-shell relative z-[1] grid w-[min(100%,260px)] place-items-center overflow-hidden text-ink", phase === "opening" && "is-opening")}
              style={{ aspectRatio: "2 / 3" }}
              aria-label="포토카드 팩 열기"
            >
              <span className="pointer-events-none absolute inset-3 rounded-[26px] border border-white/70 shadow-[inset_0_1px_0_rgb(255_255_255/0.8)]" />
              <RuneRing className={cn("h-28 w-28 text-secondary transition-opacity duration-300", phase === "opening" && "opacity-100")} />
              <span className="absolute bottom-8 text-center">
                <span className="block font-display text-sm tracking-[0.22em] text-ink/80">FAN:DUN</span>
                <span className="mt-2 block text-sm font-semibold">탭해서 열기</span>
              </span>
              <span className="hero-spark left-6 top-8" aria-hidden="true" />
              <span className="hero-spark right-7 bottom-16" aria-hidden="true" />
            </button>
          </div>
        ) : card && hunter ? (
          <div className="card-rise w-[min(100%,260px)]">
            <PhotocardFace card={card} hunter={hunter} />
            <div className="mt-4 flex justify-center">
              <RarityMark rarity={card.rarity} className="rarity-pop" />
            </div>
          </div>
        ) : null}
        <div className="mt-6 flex w-[min(100%,260px)] items-center gap-3">
          <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0 -rotate-90" aria-hidden="true">
            <circle cx="18" cy="18" r="14" fill="none" stroke="var(--theme-soft)" strokeWidth="3" />
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="var(--theme-primary)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${(progress / 100) * 88} 88`}
            />
          </svg>
          <div className="min-w-0 flex-1">
            <p className="text-sm text-muted">
              {owned === null ? "— / " : `${owned} / `}
              {photocards.length}장 모으는 중
            </p>
            <div className="collect-bar mt-2">
              <span style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
        {phase === "revealed" ? (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Button
              variant="solid"
              glow
              onClick={() => {
                setPhase("sealed");
                setToast(false);
              }}
            >
              한 장 더 열기
            </Button>
            <ButtonLink href="/binder" variant="ghost">
              바인더에서 보기
            </ButtonLink>
          </div>
        ) : (
          <p className="mt-3 max-w-xs text-center text-sm leading-relaxed text-muted">무료로 열리는 수집 팩입니다. 한 장씩 바인더에 쌓여요.</p>
        )}
        {phase === "revealed" && card ? (
          <p className="mt-4 text-sm">{isNew ? "바인더에 보관했어요." : "이미 바인더에 있는 카드예요."}</p>
        ) : null}
      </div>
      <div>
        <h2 className="text-xl font-semibold">이번 시즌의 카드</h2>
        <p className="mt-2 text-sm text-muted">프로필, 비하인드, 필름, 폴라로이드가 한 팩에 섞여 있습니다.</p>
        <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {photocards.slice(0, 8).map((entry) => {
            const owner = getHunter(entry.hunterId);
            if (!owner) return null;
            const locked = mounted ? !ids.includes(entry.id) : true;
            return (
              <div key={entry.id} className="pointer-events-none">
                <PhotocardFace card={entry} hunter={owner} locked={locked} />
              </div>
            );
          })}
        </div>
      </div>
      {toast ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4" role="status" aria-live="polite">
          <div className="fade-up surface relative px-5 py-3">
            <SparkleBurst />
            <p className="font-display text-sm tracking-[0.14em]">✦ NEW CARD FOUND</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
