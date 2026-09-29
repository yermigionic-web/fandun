"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function yes() {
  return true;
}

function no() {
  return false;
}

export function useMounted() {
  return useSyncExternalStore(subscribe, yes, no);
}
