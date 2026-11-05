import type { StaticImageData } from "next/image";

import western_haesol from "../../assets/western-bounty/bountyhunter-haesol.png";
import western_dan from "../../assets/western-bounty/bountyhunter-dan.png";
import western_sora from "../../assets/western-bounty/bountyhunter-sora.png";
import western_miro from "../../assets/western-bounty/bountyhunter-miro.png";
import western_yeoreum from "../../assets/western-bounty/bountyhunter-yeoreum.png";
import western_bok from "../../assets/western-bounty/bountyhunter-bok.png";
import western_minwon from "../../assets/western-bounty/bountyhunter-minwon.png";
import western_nagyeong from "../../assets/western-bounty/bountyhunter-nakyung.png";
import western_dahae from "../../assets/western-bounty/bountyhunter-dahae.png";
const url = (image: StaticImageData) => image.src;

export const westernSrc = {
  haesol: url(western_haesol),
  dan: url(western_dan),
  sora: url(western_sora),
  miro: url(western_miro),
  yeoreum: url(western_yeoreum),
  bok: url(western_bok),
  minwon: url(western_minwon),
  nagyeong: url(western_nagyeong),
  dahae: url(western_dahae),
import noir_haesol from "../../assets/noir-hunters/noirhunter-haesol.png";
import noir_dan from "../../assets/noir-hunters/noirhunter-dan.png";
import noir_sora from "../../assets/noir-hunters/noirhunter-sora.png";
import noir_miro from "../../assets/noir-hunters/noirhunter-miro.png";
import noir_yeoreum from "../../assets/noir-hunters/noirhunter-yeoreum.png";
import noir_bok from "../../assets/noir-hunters/noirhunter-bok.png";
import noir_minwon from "../../assets/noir-hunters/noirhunter-minwon.png";
import noir_nagyeong from "../../assets/noir-hunters/noirhunter-nakyung.png";
import noir_dahae from "../../assets/noir-hunters/noirhunter-dahae.png";
} as const;

export const noirSrc = {
  haesol: url(noir_haesol),
  dan: url(noir_dan),
  sora: url(noir_sora),
  miro: url(noir_miro),
  yeoreum: url(noir_yeoreum),
  bok: url(noir_bok),
  minwon: url(noir_minwon),
  nagyeong: url(noir_nagyeong),
  dahae: url(noir_dahae),
} as const;
