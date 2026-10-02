import type { StaticImageData } from "next/image";
import bok from "../../assets/card_image/bok_pick_card_image.png";
import dahae from "../../assets/card_image/dahae_pick_card_image.png";
import dan from "../../assets/card_image/dan_pick_card_image.png";
import haesol from "../../assets/card_image/haesol_pick_card_image.png";
import minwon from "../../assets/card_image/minwon_pick_card_image.png";
import miro from "../../assets/card_image/miro_pick_card_image.png";
import nakyung from "../../assets/card_image/nakyung_pick_card_image.png";
import sora from "../../assets/card_image/sora_pick_card_image.png";
import yeoreum from "../../assets/card_image/yeoreum_pick_card_image.png";

function url(image: StaticImageData) {
  return image.src;
}

export const pickCardSrc = {
  haesol: url(haesol),
  dan: url(dan),
  sora: url(sora),
  miro: url(miro),
  yeoreum: url(yeoreum),
  bok: url(bok),
  minwon: url(minwon),
  nakyung: url(nakyung),
  dahae: url(dahae),
} as const;

type PickCardPrefix = keyof typeof pickCardSrc;

export function pickCardImage(prefix: string) {
  return prefix in pickCardSrc ? pickCardSrc[prefix as PickCardPrefix] : undefined;
}
