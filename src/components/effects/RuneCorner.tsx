import { cn } from "@/lib/cn";

export function RuneCorner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("rune-corner text-secondary", className)} aria-hidden="true">
      <path d="M48 12a22 22 0 1 0 6 18" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M18 24a16 16 0 0 1 22-8" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1.5 2.5" strokeLinecap="round" />
      <circle cx="48" cy="12" r="1.7" fill="currentColor" />
      <path d="M30 20h3.2M29.2 23.2h4.6" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}
