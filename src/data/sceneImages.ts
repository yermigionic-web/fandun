import type { StaticImageData } from "next/image";
import type { HunterId } from "@/types";
import bokFanboard from "../../assets/fanboard/bok_fanboard.png";
import dahaeFanboard from "../../assets/fanboard/dahae_fanboard.png";
import danFanboard from "../../assets/fanboard/dan_fanboard.png";
import haesolFanboard from "../../assets/fanboard/haesol_fanboard.png";
import minwonFanboard from "../../assets/fanboard/minwon_fanboard.png";
import miroFanboard from "../../assets/fanboard/miro_fanboard.png";
import nakyungFanboard from "../../assets/fanboard/nakyung_fanboard.png";
import soraFanboard from "../../assets/fanboard/sora_fanboard.png";
import yeoreumFanboard from "../../assets/fanboard/yeoreum_fanboard.png";
import bokHeader from "../../assets/banner-header/bok_header.png";
import dahaeHeader from "../../assets/banner-header/dahae_header.png";
import danHeader from "../../assets/banner-header/dan_header.png";
import haesolHeader from "../../assets/banner-header/haesol_header.png";
import minwonHeader from "../../assets/banner-header/minwon_header.png";
import miroHeader from "../../assets/banner-header/miro_header.png";
import nakyungHeader from "../../assets/banner-header/nakyung_header.png";
import soraHeader from "../../assets/banner-header/sora_header.png";
import yeoreumHeader from "../../assets/banner-header/yeoreum_header.png";
import bokInterview from "../../assets/interview-photo/bok_interview.png";
import dahaeInterview from "../../assets/interview-photo/dahae_interview.png";
import danInterview from "../../assets/interview-photo/dan_interview.png";
import haesolInterview from "../../assets/interview-photo/haesol_interview.png";
import minwonInterview from "../../assets/interview-photo/minwon_interview.png";
import miroInterview from "../../assets/interview-photo/miro_interview.png";
import nakyungInterview from "../../assets/interview-photo/nakyung_interview.png";
import soraInterview from "../../assets/interview-photo/sora_interview.png";
import yeoreumInterview from "../../assets/interview-photo/yeoreum_interview.png";
import bokProfile from "../../assets/profile/bok_profile.png";
import dahaeProfile from "../../assets/profile/dahae_profile.png";
import danProfile from "../../assets/profile/dan_profile.png";
import haesolProfile from "../../assets/profile/haesol_profile.png";
import minwonProfile from "../../assets/profile/minwon_profile.png";
import miroProfile from "../../assets/profile/miro_profile.png";
import nakyungProfile from "../../assets/profile/nakyung_profile.png";
import soraProfile from "../../assets/profile/sora_profile.png";
import yeoreumProfile from "../../assets/profile/yeoreum_profile.png";

function url(image: StaticImageData) {
  return image.src;
}

export const profileSrc: Record<HunterId, string> = {
  haesol: url(haesolProfile),
  dan: url(danProfile),
  sora: url(soraProfile),
  miro: url(miroProfile),
  yeoreum: url(yeoreumProfile),
  bok: url(bokProfile),
  minwon: url(minwonProfile),
  nagyeong: url(nakyungProfile),
  dahae: url(dahaeProfile),
};

export const headerSrc: Record<HunterId, string> = {
  haesol: url(haesolHeader),
  dan: url(danHeader),
  sora: url(soraHeader),
  miro: url(miroHeader),
  yeoreum: url(yeoreumHeader),
  bok: url(bokHeader),
  minwon: url(minwonHeader),
  nagyeong: url(nakyungHeader),
  dahae: url(dahaeHeader),
};

export const fanboardSrc: Record<HunterId, string> = {
  haesol: url(haesolFanboard),
  dan: url(danFanboard),
  sora: url(soraFanboard),
  miro: url(miroFanboard),
  yeoreum: url(yeoreumFanboard),
  bok: url(bokFanboard),
  minwon: url(minwonFanboard),
  nagyeong: url(nakyungFanboard),
  dahae: url(dahaeFanboard),
};

export const interviewSrc: Record<HunterId, string> = {
  haesol: url(haesolInterview),
  dan: url(danInterview),
  sora: url(soraInterview),
  miro: url(miroInterview),
  yeoreum: url(yeoreumInterview),
  bok: url(bokInterview),
  minwon: url(minwonInterview),
  nagyeong: url(nakyungInterview),
  dahae: url(dahaeInterview),
};
