import Link from "next/link";
import { GateCrackIcon } from "@/components/effects/GateCrackIcon";
import type { TrendingTag as Tag } from "@/types";

export function TrendingTag({ tag }: { tag: Tag }) {
  return (
    <Link
      href={`/fanboard?tag=${encodeURIComponent(tag.label)}`}
      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/80 px-4 text-sm font-medium shadow-sm"
    >
      {tag.hot ? <GateCrackIcon className="h-4 w-4" /> : null}
      <span>#{tag.label}</span>
      <span className="text-xs text-muted">{tag.count.toLocaleString("ko-KR")}</span>
    </Link>
  );
}
