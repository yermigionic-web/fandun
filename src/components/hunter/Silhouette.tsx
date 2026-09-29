import { cn } from "@/lib/cn";
import type { SilhouetteVariant } from "@/types";

export function Silhouette({ variant = "long", className }: { variant?: SilhouetteVariant; className?: string }) {
  return (
    <svg viewBox="0 0 160 420" className={cn("text-current", className)} fill="currentColor" aria-hidden="true">
      <ellipse cx="80" cy="392" rx="36" ry="7" opacity="0.16" />
      {variant === "long" ? <path d="M48 118c-8 46-6 120 2 176 2 10 14 8 16 0 2-28 4-70 2-104 6 40 8 86 6 112 2 8 14 8 16 0 4-48 2-110-2-150 10 6 28 2 32-8 4-54-6-96-22-112-16-12-38-10-50-4z" opacity="0.28" /> : null}
      {variant === "tie" ? <circle cx="112" cy="132" r="11" opacity="0.4" /> : null}
      <path d="M58 132c2-6 10-14 22-16 14-2 26 4 30 14 8 4 16 18 14 34-4 36-2 92 2 132-2 16-16 18-24 12 2-28 2-64 0-92-2 30-2 62 0 94-8 6-22 4-24-12-2-40 2-96 4-132-6-10-2-24-4-34z" opacity="0.42" />
      <path d="M70 292c1 34 0 62-3 86h14c2-22 3-46 4-68 5 18 10 42 9 68h16c-3-36-12-78-18-70 2-14-1-30-8-40-5 6-14 8-20 6-2 8 0 16 6 18z" opacity="0.5" />
      <path
        d={
          variant === "short"
            ? "M58 78c2-24 12-40 22-40s20 16 22 40c6 2 12 12 8 22-5 2-10-1-12-6-2 8-8 12-18 12s-16-4-18-12c-2 5-7 8-12 6-4-10 2-20 8-22z"
            : variant === "bob" || variant === "tie"
              ? "M50 86c2-30 14-52 30-52s28 22 30 52c8 4 14 18 6 30-6 2-12-2-14-8-3 12-12 18-22 18s-19-6-22-18c-2 6-8 10-14 8-8-12-2-26 6-30z"
              : "M54 84c1-32 14-54 26-54s25 22 26 54c6 6 14 28 6 46-7 3-14-2-16-8-2 10-10 16-20 16s-18-6-20-16c-2 6-9 11-16 8-8-18 0-40 6-46z"
        }
        opacity="0.62"
      />
      <ellipse cx="80" cy="78" rx="16" ry="18" opacity="0.22" />
    </svg>
  );
}
