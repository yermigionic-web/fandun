import type { StaticImageData } from "next/image";
import type { HunterId } from "@/types";
import bokCasual from "../../assets/photo-cards/bok_pc_casual.png";
import bokLimited from "../../assets/photo-cards/bok_pc_limited.png";
import bokProfile from "../../assets/photo-cards/bok_pc_profile.png";
import bokSpecial from "../../assets/photo-cards/bok_pc_special.png";
import dahaeCasual from "../../assets/photo-cards/dahae_pc_casual.png";
import dahaeLimited from "../../assets/photo-cards/dahae_pc_limited.png";
import dahaeProfile from "../../assets/photo-cards/dahae_pc_profile.png";
import dahaeSpecial from "../../assets/photo-cards/dahae_pc_special.png";
import danCasual from "../../assets/photo-cards/dan_pc_casual.png";
import danLimited from "../../assets/photo-cards/dan_pc_limited.png";
import danProfile from "../../assets/photo-cards/dan_pc_profile.png";
import danSpecial from "../../assets/photo-cards/dan_pc_special.png";
import haesolCasual from "../../assets/photo-cards/haesol_pc_casual.png";
import haesolLimited from "../../assets/photo-cards/haesol_pc_limited.png";
import haesolProfile from "../../assets/photo-cards/haesol_pc_profile.png";
import haesolSpecial from "../../assets/photo-cards/haesol_pc_special.png";
import minwonCasual from "../../assets/photo-cards/minwon_pc_casual.png";
import minwonLimited from "../../assets/photo-cards/minwon_pc_limited.png";
import minwonProfile from "../../assets/photo-cards/minwon_pc_profile.png";
import minwonSpecial from "../../assets/photo-cards/minwon_pc_special.png";
import miroCasual from "../../assets/photo-cards/miro_pc_casual.png";
import miroLimited from "../../assets/photo-cards/miro_pc_limited.png";
import miroProfile from "../../assets/photo-cards/miro_pc_profile.png";
import miroSpecial from "../../assets/photo-cards/miro_pc_special.png";
import nakyungCasual from "../../assets/photo-cards/nakyung_pc_casual.png";
import nakyungLimited from "../../assets/photo-cards/nakyung_pc_limited.png";
import nakyungProfile from "../../assets/photo-cards/nakyung_pc_profile.png";
import nakyungSpecial from "../../assets/photo-cards/nakyung_pc_special.png";
import soraCasual from "../../assets/photo-cards/sora_pc_casual.png";
import soraLimited from "../../assets/photo-cards/sora_pc_limited.png";
import soraProfile from "../../assets/photo-cards/sora_pc_profile.png";
import soraSpecial from "../../assets/photo-cards/sora_pc_special.png";
import yeoreumCasual from "../../assets/photo-cards/yeoreum_pc_casual.png";
import yeoreumLimited from "../../assets/photo-cards/yeoreum_pc_limited.png";
import yeoreumProfile from "../../assets/photo-cards/yeoreum_pc_profile.png";
import yeoreumSpecial from "../../assets/photo-cards/yeoreum_pc_special.png";

function url(image: StaticImageData) {
  return image.src;
}

export const photocardSrc: Record<HunterId, { profile: string; casual: string; special: string; limited: string }> = {
  haesol: { profile: url(haesolProfile), casual: url(haesolCasual), special: url(haesolSpecial), limited: url(haesolLimited) },
  dan: { profile: url(danProfile), casual: url(danCasual), special: url(danSpecial), limited: url(danLimited) },
  sora: { profile: url(soraProfile), casual: url(soraCasual), special: url(soraSpecial), limited: url(soraLimited) },
  miro: { profile: url(miroProfile), casual: url(miroCasual), special: url(miroSpecial), limited: url(miroLimited) },
  yeoreum: { profile: url(yeoreumProfile), casual: url(yeoreumCasual), special: url(yeoreumSpecial), limited: url(yeoreumLimited) },
  bok: { profile: url(bokProfile), casual: url(bokCasual), special: url(bokSpecial), limited: url(bokLimited) },
  minwon: { profile: url(minwonProfile), casual: url(minwonCasual), special: url(minwonSpecial), limited: url(minwonLimited) },
  nagyeong: { profile: url(nakyungProfile), casual: url(nakyungCasual), special: url(nakyungSpecial), limited: url(nakyungLimited) },
  dahae: { profile: url(dahaeProfile), casual: url(dahaeCasual), special: url(dahaeSpecial), limited: url(dahaeLimited) },
};
