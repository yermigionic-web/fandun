"use client";

import { Button } from "@/components/ui/Button";
import { useHunterTheme } from "@/context/ThemeProvider";
import type { HunterId } from "@/types";

export function FavoriteButton({ hunterId }: { hunterId: HunterId }) {
  const { hunterId: selected, selectHunter } = useHunterTheme();
  const active = selected === hunterId;
  return (
    <Button variant={active ? "soft" : "solid"} glow onClick={() => selectHunter(hunterId)} aria-pressed={active}>
      {active ? "이 팬덤에 있어요" : "최애로 고르기"}
    </Button>
  );
}
