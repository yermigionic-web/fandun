"use client";

import { SparkleBurst } from "@/components/effects/SparkleBurst";
import { getHunter } from "@/data/hunters";
import { useHunterTheme } from "@/context/ThemeProvider";

export function EnteringToast() {
  const { entering } = useHunterTheme();
  if (!entering) return null;
  const hunter = getHunter(entering.id);
  if (!hunter) return null;

  return (
    <div key={entering.nonce} className="pointer-events-none fixed inset-0 z-50" role="status" aria-live="polite">
      <span className="theme-ripple" />
      <SparkleBurst className="left-1/2 top-[42%] h-16 w-16 -translate-x-1/2 -translate-y-1/2" />
      <div className="fade-up surface absolute left-1/2 top-[calc(42%+2.5rem)] -translate-x-1/2 px-5 py-3 text-center">
        <p className="font-display text-sm tracking-[0.08em]">Entering {hunter.nameEn}&apos;s fandom…</p>
        <p className="mt-1 text-xs text-muted">{hunter.nameKo}의 팬덤으로 들어가는 중</p>
      </div>
    </div>
  );
}
