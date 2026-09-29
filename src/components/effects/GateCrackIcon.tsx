import { cn } from "@/lib/cn";

export function GateCrackIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("text-secondary", className)} aria-hidden="true">
      <ellipse cx="12" cy="12" rx="7" ry="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 3.2 10.4 8.2 13.1 10.4 10 14.2 12.6 16.4 11 20.8" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
