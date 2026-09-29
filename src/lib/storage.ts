import { isHunterId, type HunterId } from "@/types";

export const FAVORITE_KEY = "fandun:favorite";
export const BINDER_KEY = "fandun:binder";

const EMPTY: string[] = [];
let binderRaw: string | null = null;
let binderCache: string[] = EMPTY;
let binderReady = false;

export function readFavorite(): HunterId | null {
  const value = localStorage.getItem(FAVORITE_KEY);
  return isHunterId(value) ? value : null;
}

export function subscribeFavorite(onStoreChange: () => void) {
  window.addEventListener("fandun-favorite", onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener("fandun-favorite", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function readBinder(): string[] {
  const raw = localStorage.getItem(BINDER_KEY);
  if (binderReady && raw === binderRaw) return binderCache;
  binderReady = true;
  binderRaw = raw;
  if (!raw) {
    binderCache = EMPTY;
    return binderCache;
  }
  try {
    const parsed = JSON.parse(raw) as unknown;
    const next = Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : EMPTY;
    binderCache = next.length === 0 ? EMPTY : next;
  } catch {
    binderCache = EMPTY;
  }
  return binderCache;
}

export function subscribeBinder(onStoreChange: () => void) {
  window.addEventListener("fandun-binder", onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener("fandun-binder", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function addToBinder(id: string) {
  const current = readBinder();
  if (current.includes(id)) return false;
  const next = [...current, id];
  const raw = JSON.stringify(next);
  localStorage.setItem(BINDER_KEY, raw);
  binderRaw = raw;
  binderCache = next;
  binderReady = true;
  window.dispatchEvent(new Event("fandun-binder"));
  return true;
}

export function getEmptyBinder() {
  return EMPTY;
}

export function getNullSnapshot() {
  return null;
}
