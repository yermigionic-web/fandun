import Link from "next/link";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { getHunter } from "@/data/hunters";
import type { CoverStory } from "@/types";

export function CoverStoryCard({ story, index }: { story: CoverStory; index: number }) {
  const hunter = getHunter(story.id);
  if (!hunter) return null;
  return (
    <Link href={`/cover/${story.id}`} className="exhibit-card portal-card surface flex h-full flex-col overflow-hidden">
      <MediaFrame src={hunter.images.poster} alt="" monogram={hunter.monogram} tone={hunter.theme} className="aspect-[3/4] w-full" />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-muted">COVER {String(index + 1).padStart(2, "0")}</p>
        <h2 className="mt-3 font-editorial text-3xl font-medium italic leading-tight">{story.title}</h2>
        <p className="mt-3 flex-1 font-editorial text-base leading-relaxed text-muted">{story.deck}</p>
        <p className="mt-4 text-sm font-semibold">
          {hunter.nameKo}
          <span className="ml-2 font-normal text-muted">{hunter.nameEn}</span>
        </p>
      </div>
    </Link>
  );
}
