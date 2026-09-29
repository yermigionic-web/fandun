import { cn } from "@/lib/cn";

export function SparkleBurst({ className }: { className?: string }) {
  return (
    <span className={cn("sparkle-burst", className)} aria-hidden="true">
      {Array.from({ length: 8 }, (_, index) => (
        <span key={index} />
      ))}
    </span>
  );
}
