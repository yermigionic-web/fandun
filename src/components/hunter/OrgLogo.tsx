"use client";

import { useState } from "react";

export function OrgLogo({ src, size = 22 }: { src: string; size?: number }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <span
      className="inline-grid shrink-0 place-items-center overflow-hidden rounded-[7px] border border-[#e4ddd4] bg-[#fffcf9]"
      style={{ width: size, height: size }}
    >
      <img src={src} alt="" onError={() => setVisible(false)} className="h-[78%] w-[78%] object-contain" />
    </span>
  );
}
