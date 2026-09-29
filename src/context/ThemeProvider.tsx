"use client";

import { createContext, useContext, useEffect, useState, useSyncExternalStore } from "react";
import { FAVORITE_KEY, getNullSnapshot, readFavorite, subscribeFavorite } from "@/lib/storage";
import type { HunterId } from "@/types";

type Entering = { id: HunterId; nonce: number } | null;

type ThemeContextValue = {
  hunterId: HunterId | null;
  selectHunter: (id: HunterId) => void;
  entering: Entering;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const hunterId = useSyncExternalStore(subscribeFavorite, readFavorite, getNullSnapshot);
  const [entering, setEntering] = useState<Entering>(null);

  useEffect(() => {
    if (hunterId) document.documentElement.dataset.hunter = hunterId;
  }, [hunterId]);

  useEffect(() => {
    if (!entering) return;
    const timer = window.setTimeout(() => setEntering(null), 1700);
    return () => window.clearTimeout(timer);
  }, [entering]);

  const selectHunter = (id: HunterId) => {
    localStorage.setItem(FAVORITE_KEY, id);
    document.documentElement.dataset.hunter = id;
    window.dispatchEvent(new Event("fandun-favorite"));
    setEntering({ id, nonce: Date.now() });
  };

  return <ThemeContext.Provider value={{ hunterId, selectHunter, entering }}>{children}</ThemeContext.Provider>;
}

export function useHunterTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("ThemeProvider is missing");
  return value;
}
