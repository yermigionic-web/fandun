import { RuneCorner } from "@/components/effects/RuneCorner";
import { CardBack } from "@/components/photocards/CardBack";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { cn } from "@/lib/cn";
import type { Hunter, Photocard } from "@/types";

const rarityClass = {
  NORMAL: "bg-[#f7f3ee] text-ink",
  RARE: "bg-primary text-ink",
  SPECIAL: "bg-[#f4e4bc] text-ink",
  "50K LIMITED": "bg-[linear-gradient(100deg,#f7d5e3,#f6e7c1_55%,#e4eaf6)] text-ink",
} as const;

const raritySkin = {
  NORMAL: "rarity-skin-normal",
  RARE: "rarity-skin-rare",
  SPECIAL: "rarity-skin-special",
  "50K LIMITED": "rarity-skin-limited",
} as const;

export function RarityMark({ rarity, className }: { rarity: Photocard["rarity"]; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em]", rarityClass[rarity], className)}>
      {rarity}
    </span>
  );
}

export function PhotocardFace({
  card,
  hunter,
  locked = false,
  flipped = false,
}: {
  card: Photocard;
  hunter: Hunter;
  locked?: boolean;
  flipped?: boolean;
}) {
  return (
    <div className="pc-sweep card-scene aspect-[2/3] w-full">
      <div className={cn("card-inner", flipped && "is-flipped")}>
        <div className={cn("card-face surface relative", raritySkin[card.rarity], locked && "opacity-60")}>
          <RuneCorner className="absolute right-2 top-2 z-10 h-7 w-7 opacity-60" />
          <MediaFrame
            src={locked ? undefined : card.src}
            alt={locked ? "" : card.title}
            monogram={hunter.monogram}
            silhouette={locked ? hunter.silhouette : undefined}
            tone={hunter.theme}
            align="bottom"
            className="h-[68%] w-full"
          />
          <div className="space-y-1 px-3 py-3">
            <RarityMark rarity={card.rarity} />
            <p className={cn("font-semibold", locked ? "line-clamp-2 text-[11px] leading-snug" : "truncate text-sm")}>
              {locked ? "아직 이 슬롯의 카드를 만나지 못했어요." : card.title}
            </p>
            <p className="truncate text-xs text-muted">{hunter.nameKo}</p>
          </div>
        </div>
        <div className="card-face card-backface surface">
          <CardBack />
        </div>
      </div>
    </div>
  );
}
