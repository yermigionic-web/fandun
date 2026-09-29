import { SparkleBurst } from "@/components/effects/SparkleBurst";

export function MagicRipple({ x, y }: { x: number; y: number }) {
  return (
    <span className="pointer-events-none absolute z-10" style={{ left: x, top: y }} aria-hidden="true">
      <span className="magic-ripple" />
      <SparkleBurst />
    </span>
  );
}
