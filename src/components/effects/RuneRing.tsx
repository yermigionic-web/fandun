import { cn } from "@/lib/cn";

export function RuneRing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={cn("text-current", className)} aria-hidden="true">
      <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="27" fill="none" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 3" />
      {Array.from({ length: 8 }, (_, index) => {
        const angle = (index / 8) * Math.PI * 2 - Math.PI / 2;
        return <circle key={index} cx={50 + Math.cos(angle) * 36} cy={50 + Math.sin(angle) * 36} r="1.7" fill="currentColor" />;
      })}
    </svg>
  );
}
