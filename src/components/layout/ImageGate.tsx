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
    <div
      id="fandun-gate"
      className={phase === "leaving" ? "gate-screen is-open" : "gate-screen"}
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 90,
        display: "grid",
        placeItems: "center",
        backgroundColor: "#f3efe8",
        color: "#2a2422",
        textAlign: "center",
      }}
    >
      <div>
        <div style={{ width: 64, height: 64, margin: "0 auto", color: "#e7a898" }}>
          <RuneRing className="spin-slow h-full w-full" />
        </div>
        <p className="mt-6 font-display text-3xl font-semibold tracking-[0.14em] text-ink" style={{ marginTop: 24, fontSize: 30, letterSpacing: "0.14em" }}>
          FAN<span className="logo-colon">:</span>DUN
        </p>
        <p className="mt-2 text-sm tracking-[0.28em] text-muted" style={{ marginTop: 8, letterSpacing: "0.28em", color: "#5e5752" }}>
          팬던
        </p>
        <p className="mt-5 text-sm text-ink" style={{ marginTop: 20 }}>
          게이트를 여는 중
        </p>
        <div
          className="mx-auto mt-5 h-1.5 w-52 overflow-hidden rounded-full bg-soft"
          style={{ width: 208, height: 6, margin: "20px auto 0", overflow: "hidden", borderRadius: 999, background: "#f8e6e1" }}
        >
          <div className="gate-bar h-full rounded-full bg-primary" style={{ width: `${percent}%`, height: "100%", borderRadius: 999, background: "#e7a898" }} />
        </div>
        <p className="mt-3 text-xs font-semibold tracking-[0.16em] text-muted" style={{ marginTop: 12, color: "#5e5752" }}>
          {percent}%
        </p>
      </div>
    </div>
  );
}
