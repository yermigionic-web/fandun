"use client";

import { useSyncExternalStore } from "react";
import { getEmptyBinder, readBinder, subscribeBinder } from "@/lib/storage";

export function useBinderIds() {
  return useSyncExternalStore(subscribeBinder, readBinder, getEmptyBinder);
}
