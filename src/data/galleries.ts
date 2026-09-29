import { animalHuntersSrc, birthdayCafeSrc, magazineSrc, offRecordSrc, seoul1999Src } from "@/data/eventAssets";
import type { Gallery } from "@/types";

export const galleries: Gallery[] = [
  {
    id: "hunter-posters",
    title: "Hunter Posters",
    subtitle: "공식 포스터 아카이브",
    description: "중계 전과 광고 사이에 걸린, 가장 단정한 얼굴들.",
    badge: "POPULAR",
    mood: "editorial",
    cover: magazineSrc.haesol,
    coverHunterId: "haesol",
  },
  {
    id: "sd-animal",
    title: "SD Animal",
    subtitle: "동글동글 동물 버전",
    description: "팬미팅 굿즈가 되기 전에 먼저 품절되는 자리.",
    badge: "POPULAR",
    mood: "playful",
    cover: animalHuntersSrc.seohn,
    coverHunterId: "haesol",
  },
  {
    id: "another-seoul-1999",
    title: "1999: Another Seoul",
    subtitle: "다른 서울의 필름",
    description: "게이트가 열리기 전의 도시를 빌려 온 한정 아카이브.",
    badge: "LIMITED",
    mood: "retro",
    cover: seoul1999Src.miro,
    coverHunterId: "miro",
  },
  {
    id: "off-the-record",
    title: "Off the Record",
    subtitle: "카메라가 쉰 줄 알았던 순간",
    description: "메이킹처럼 보이지만, 누군가의 일상인 컷.",
    badge: "NEW",
    mood: "candid",
    cover: offRecordSrc.dan,
    coverHunterId: "dan",
  },
  {
    id: "birthday-polaroids",
    title: "Birthday Cafe Polaroids",
    subtitle: "생일카페에서 돌아온 한 장",
    description: "컵홀더와 사인, 그리고 조금 기울어진 폴라로이드.",
    badge: "LIMITED",
    mood: "polaroid",
    cover: birthdayCafeSrc.dahae,
    coverHunterId: "dahae",
  },
];

export function getGallery(id: string) {
  return galleries.find((gallery) => gallery.id === id);
}
