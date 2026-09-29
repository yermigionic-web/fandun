"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { useHunterTheme } from "@/context/ThemeProvider";
import { getHunter } from "@/data/hunters";
import { cn } from "@/lib/cn";
import { navItems } from "@/lib/nav";
import { useMounted } from "@/lib/useMounted";

export function SiteHeader() {
  const pathname = usePathname();
  const { hunterId } = useHunterTheme();
  const mounted = useMounted();
  const hunter = hunterId ? getHunter(hunterId) : undefined;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-white/80 bg-[#f3efe8]/88 backdrop-blur-xl transition-shadow duration-300",
        scrolled && "shadow-[0_10px_28px_rgb(70_48_36/0.06)]",
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        {mounted ? (
          <Link
            href="/#choose"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/80 px-3 text-sm shadow-sm"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-soft text-xs font-semibold">
              {hunter?.monogram ?? "✦"}
            </span>
            <span className="max-w-[8.5rem] truncate">{hunter ? `✦ ${hunter.nameKo}` : "최애 고르기"}</span>
          </Link>
        ) : (
          <span className="inline-block h-11 w-28 rounded-full bg-white/70" />
        )}
      </div>
      <nav aria-label="주요 메뉴" className="no-scrollbar mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-4 pb-3 sm:px-6 lg:justify-center">
        {navItems.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "nav-pill inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full px-3.5 text-[12px] font-semibold tracking-[0.08em]",
                active ? "text-ink" : "text-muted hover:bg-white/70",
              )}
            >
              {active ? <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--theme-glow)]" /> : null}
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
