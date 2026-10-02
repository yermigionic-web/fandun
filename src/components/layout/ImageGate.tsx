"use client";

import { useEffect, useState } from "react";
import { RuneRing } from "@/components/effects/RuneRing";
import { preloadSrcs } from "@/lib/preloadSrcs";

export function ImageGate() {
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const held = [document.querySelector("header"), document.querySelector("main"), document.querySelector("footer")];
    held.forEach((element) => element?.setAttribute("inert", ""));

    let cancelled = false;
    let closed = false;
    let frame = 0;
    let leaveTimer = 0;
    const timers: number[] = [];
    const release = () => held.forEach((element) => element?.removeAttribute("inert"));
    const close = () => {
      if (cancelled || closed) return;
      closed = true;
      setPhase("leaving");
      leaveTimer = window.setTimeout(() => {
        if (cancelled) return;
        setPhase("done");
        release();
      }, 460);
    };

    const total = preloadSrcs.length;
    if (total === 0) {
      close();
      return () => {
        cancelled = true;
        window.clearTimeout(leaveTimer);
        release();
      };
    }

    let done = 0;
    const tick = () => {
      if (cancelled) return;
      done += 1;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        if (cancelled) return;
        setPercent(Math.min(100, Math.round((done / total) * 100)));
        if (done >= total) close();
      });
    };

    preloadSrcs.forEach((src) => {
      const image = new Image();
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timer);
        tick();
      };
      const timer = window.setTimeout(finish, 20000);
      timers.push(timer);
      image.onload = finish;
      image.onerror = finish;
      image.src = src;
    });

    return () => {
      cancelled = true;
      window.clearTimeout(leaveTimer);
      window.cancelAnimationFrame(frame);
      timers.forEach((timer) => window.clearTimeout(timer));
      release();
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div id="fandun-gate" className={phase === "leaving" ? "gate-screen is-open" : "gate-screen"} role="status" aria-live="polite">
      <div className="text-center">
        <RuneRing className="spin-slow mx-auto h-16 w-16 text-primary" />
        <p className="mt-6 font-display text-3xl font-semibold tracking-[0.14em] text-ink">
          FAN<span className="logo-colon">:</span>DUN
        </p>
        <p className="mt-2 text-sm tracking-[0.28em] text-muted">팬던</p>
        <p className="mt-5 text-sm text-ink">게이트를 여는 중</p>
        <div className="mx-auto mt-5 h-1.5 w-52 overflow-hidden rounded-full bg-soft">
          <div className="gate-bar h-full rounded-full bg-primary" style={{ width: `${percent}%` }} />
        </div>
        <p className="mt-3 text-xs font-semibold tracking-[0.16em] text-muted">{percent}%</p>
      </div>
    </div>
  );
}
