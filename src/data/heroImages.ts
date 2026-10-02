import type { StaticImageData } from "next/image";
import type { HunterId } from "@/types";
import bok from "../../assets/hero-image/bok_hero_upper_body.png";
import dahae from "../../assets/hero-image/dahae_hero_upper_body.png";
import dan from "../../assets/hero-image/dan_hero_upper_body.png";
import haesol from "../../assets/hero-image/haesol_hero_upper_body.png";
import minwon from "../../assets/hero-image/minwon_hero_upper_body.png";
import miro from "../../assets/hero-image/miro_hero_upper_body.png";
import nakyung from "../../assets/hero-image/nakyung_hero_upper_body.png";
import sora from "../../assets/hero-image/sora_hero_upper_body.png";
import yeoreum from "../../assets/hero-image/yeoreum_hero_upper_body.png";

function url(image: StaticImageData) {
  return image.src;
}

export const heroStandingSrc: Record<HunterId, string> = {
  haesol: url(haesol),
  dan: url(dan),
  sora: url(sora),
  miro: url(miro),
  yeoreum: url(yeoreum),
  bok: url(bok),
  minwon: url(minwon),
  nagyeong: url(nakyung),
  dahae: url(dahae),
};
