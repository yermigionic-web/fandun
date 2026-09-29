"use client";

import { useEffect, useState } from "react";
import { RuneRing } from "@/components/effects/RuneRing";
import { AffiliationBadge } from "@/components/hunter/AffiliationBadge";
import { RankBadge } from "@/components/hunter/RankBadge";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { useHunterTheme } from "@/context/ThemeProvider";
import { getHunter, hunters } from "@/data/hunters";
import { cn } from "@/lib/cn";
import { prefersReducedMotion } from "@/lib/motion";

export function HeroSection() {
  const { hunterId } = useHunterTheme();
  const [index, setIndex] = useState(0);
  const favorite = hunterId ? getHunter(hunterId) : undefined;
  const hunter = favorite ?? hunters[index] ?? hunters[0];

  useEffect(() => {
    if (favorite) return;
    const timer = window.setInterval(() => {
      if (prefersReducedMotion()) return;
      setIndex((current) => (current + 1) % hunters.length);
    }, 4600);
    return () => window.clearInterval(timer);
  }, [favorite]);

  return (
    <Container>
      <section className="pb-4 pt-8 md:pt-12">
        <div className="surface">
          <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${hunter.theme.primary}, ${hunter.theme.secondary})` }} />
          <div className="grid items-center gap-8 p-5 md:grid-cols-[1.05fr_0.95fr] md:p-10">
            <div>
              <Logo large withHangul heading />
              <p className="mt-6 font-display text-2xl tracking-tight md:text-3xl">Enter your fandom.</p>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">최애를 따라 들어온 곳, 팬던</p>
              <p key={hunter.id} className="fade-up mt-4 text-sm text-muted">
                {hunter.nameKo} · {hunter.tagline}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href="/#choose" glow>
                  최애 고르기
                </ButtonLink>
                <ButtonLink href="/gallery" variant="ghost">
                  50K 갤러리 입장
                </ButtonLink>
                <ButtonLink href="/pack" variant="soft">
                  포카 한 팩 열기
                </ButtonLink>
              </div>
            </div>
            <div>
              <div key={hunter.id} className="fade-up relative md:-mt-8">
                <RuneRing className="pointer-events-none absolute left-1/2 top-[46%] h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 text-secondary opacity-25" />
                <span className="hero-spark left-[12%] top-[18%]" aria-hidden="true" />
                <span className="hero-spark right-[14%] top-[28%]" aria-hidden="true" />
                <span className="hero-spark bottom-[28%] left-[18%]" aria-hidden="true" />
                <MediaFrame
                  src={hunter.images.standing}
                  alt={`${hunter.nameKo} 전신`}
                  silhouette={hunter.silhouette}
                  tone={hunter.theme}
                  align="bottom"
                  eager
                  peek
                  className="aspect-[3/4] max-h-[560px] w-full rounded-[28px]"
                />
                <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                  <RankBadge rank={hunter.rank} label={hunter.rankLabel} />
                  <AffiliationBadge affiliation={hunter.affiliation} />
                </div>
                <div className="absolute inset-x-3 bottom-3 rounded-[20px] bg-white/80 px-4 py-3 backdrop-blur-md">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-muted">{hunter.statusLine}</p>
                  <p className="mt-1 text-lg font-semibold">{hunter.nameKo}</p>
                  <p className="text-sm text-muted">{hunter.nameEn}</p>
                </div>
              </div>
              {favorite ? null : (
                <div className="mt-3 flex justify-center">
                  {hunters.map((entry, dotIndex) => (
                    <button
                      key={entry.id}
                      type="button"
                      aria-label={`${entry.nameKo} 미리보기`}
                      aria-current={entry.id === hunter.id}
                      onClick={() => setIndex(dotIndex)}
                      className="grid h-11 w-6 place-items-center"
                    >
                      <span className={cn("orbit-dot", entry.id === hunter.id && "is-on")} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
