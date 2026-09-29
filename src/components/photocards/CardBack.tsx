import { RuneRing } from "@/components/effects/RuneRing";

export function CardBack() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(180deg,var(--theme-soft),#fffcf9_55%,var(--theme-soft))] text-ink">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, transparent 18px, color-mix(in srgb, var(--theme-secondary) 35%, transparent) 19px, transparent 22px)",
          backgroundSize: "46px 46px",
        }}
      />
      <RuneRing className="relative h-28 w-28 text-secondary" />
      <p className="relative mt-4 font-display text-sm tracking-[0.22em]">FAN:DUN</p>
      <p className="relative mt-1 text-[11px] tracking-[0.28em] text-muted">팬던</p>
      <p className="absolute bottom-4 text-[10px] tracking-[0.22em] text-muted">COLLECTOR</p>
    </div>
  );
}
