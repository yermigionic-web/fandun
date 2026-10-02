"use client";

import { useEffect, useRef, useState } from "react";
import { RuneCorner } from "@/components/effects/RuneCorner";
import { Silhouette } from "@/components/hunter/Silhouette";
import { cn } from "@/lib/cn";
import type { HunterTheme, SilhouetteVariant } from "@/types";

export function MediaFrame({
  src,
  alt,
  className,
  fit = "contain",
  align = "center",
  monogram,
  silhouette,
  tone,
  eager = false,
  peek = false,
}: {
  src?: string;
  alt: string;
  className?: string;
  fit?: "contain" | "cover";
  align?: "bottom" | "center";
  monogram?: string;
  silhouette?: SilhouetteVariant;
  tone?: HunterTheme;
  eager?: boolean;
  peek?: boolean;
}) {
  const [status, setStatus] = useState<"loading" | "loaded" | "missing">(src ? "loading" : "missing");
  const imgRef = useRef<HTMLImageElement>(null);
  const showArt = status !== "loaded";

  useEffect(() => {
    const img = imgRef.current;
    if (!src || !img?.complete) return;
    setStatus(img.naturalWidth > 0 ? "loaded" : "missing");
  }, [src]);

  return (
    <div
      className={cn("relative bg-soft", peek ? "overflow-visible" : "overflow-hidden", className)}
      style={tone ? { background: `linear-gradient(180deg, ${tone.soft} 0%, #fffcf9 78%)` } : undefined}
      role={alt && status !== "loaded" ? "img" : undefined}
      aria-label={alt && status !== "loaded" ? alt : undefined}
    >
      {showArt ? <RuneCorner className="absolute right-2 top-2 h-10 w-10 opacity-50" /> : null}
      {showArt ? (
        <div className="absolute inset-0 grid place-items-center" style={{ color: tone?.secondary ?? "var(--theme-secondary)" }} aria-hidden="true">
          {silhouette ? (
            <Silhouette variant={silhouette} className={cn("w-auto", peek ? "h-[108%] -translate-y-3" : "h-[92%]")} />
          ) : (
            <span className="font-editorial text-5xl text-ink/80">{monogram}</span>
          )}
        </div>
      ) : null}
      {src && status !== "missing" ? (
        // Transparent PNG cutouts need a plain img so a missing file can fall back without cropping.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={status === "loaded" ? alt : ""}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("missing")}
          className={cn(
            "media-img absolute w-full transition-opacity duration-500",
            peek ? "-top-5 left-0 h-[108%]" : "inset-0 h-full",
            fit === "cover" ? "object-cover" : "object-contain",
            align === "bottom" ? "object-bottom" : "object-center",
            status === "loaded" ? "opacity-100" : "opacity-0",
          )}
        />
      ) : null}
    </div>
  );
}
