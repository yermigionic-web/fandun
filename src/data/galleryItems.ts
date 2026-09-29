import { animalHuntersSrc, birthdayCafeSrc, magazineSrc, offRecordSrc, seoul1999Src } from "@/data/eventAssets";
import type { Aspect, GalleryId, GalleryItem, HunterId } from "@/types";

function item(
  id: string,
  galleryId: GalleryId,
  hunterId: HunterId,
  title: string,
  caption: string,
  src: string,
  tags: string[],
  aspect: Aspect,
  hunterIds?: HunterId[],
): GalleryItem {
  return { id, galleryId, hunterId, hunterIds, title, caption, src, tags, aspect };
}

export const galleryItems: GalleryItem[] = [
  item("poster-haesol", "hunter-posters", "haesol", "궤도 위 포스터", "중계 시작 전에 걸린 공식 포스터.", magazineSrc.haesol, ["공식", "포스터"], "portrait"),
  item("poster-dan", "hunter-posters", "dan", "따뜻한 손", "태림길드 시즌 포스터.", magazineSrc.dan, ["공식", "포스터"], "portrait"),
  item("poster-sora", "hunter-posters", "sora", "단독", "단체 컷을 거절한 뒤 남은 한 장의 포스터.", magazineSrc.sora, ["공식", "포스터"], "portrait"),
  item("poster-miro", "hunter-posters", "miro", "출구등", "프리랜서 포스터.", magazineSrc.miro, ["공식", "포스터"], "portrait"),
  item("poster-yeoreum", "hunter-posters", "yeoreum", "감정서 No.7", "한결손해보험 포스터.", magazineSrc.yeoreum, ["공식", "포스터"], "portrait"),
  item("poster-bok", "hunter-posters", "bok", "면허", "F급 개인 헌터 포스터.", magazineSrc.bok, ["공식", "포스터"], "portrait"),
  item("poster-minwon", "hunter-posters", "minwon", "선의 앞", "국가재난대응청 포스터.", magazineSrc.minwon, ["공식", "포스터"], "portrait"),
  item("poster-nagyeong", "hunter-posters", "nagyeong", "레이드전략실", "세온헌터스 레이드전략실 포스터.", magazineSrc.nakyung, ["공식", "포스터"], "portrait"),
  item("poster-dahae", "hunter-posters", "dahae", "갈래", "세온헌터스 신예 포스터.", magazineSrc.dahae, ["공식", "포스터"], "portrait"),

  item(
    "sd-seohn",
    "sd-animal",
    "haesol",
    "세온헌터스",
    "곽해솔, 선우나경, 성다해",
    animalHuntersSrc.seohn,
    ["SD", "한정"],
    "square",
    ["haesol", "nagyeong", "dahae"],
  ),
  item("sd-tr", "sd-animal", "dan", "태림길드", "류단", animalHuntersSrc.tr, ["SD"], "square", ["dan"]),
  item("sd-hawon", "sd-animal", "sora", "해스티 원더러즈", "황보소라", animalHuntersSrc.hawon, ["SD"], "square", ["sora"]),
  item("sd-hankyul", "sd-animal", "yeoreum", "한결손해보험", "차여름", animalHuntersSrc.hankyul, ["SD"], "square", ["yeoreum"]),
  item("sd-ndra", "sd-animal", "minwon", "국가재난대응청", "강민원", animalHuntersSrc.ndra, ["SD"], "square", ["minwon"]),
  item(
    "sd-independent",
    "sd-animal",
    "miro",
    "무소속",
    "정미로, 박복",
    animalHuntersSrc.independent,
    ["SD"],
    "square",
    ["miro", "bok"],
  ),

  item("seoul-haesol", "another-seoul-1999", "haesol", "곽해솔", "1999: Another Seoul", seoul1999Src.haesol, ["필름", "한정"], "film"),
  item("seoul-dan", "another-seoul-1999", "dan", "류단", "1999: Another Seoul", seoul1999Src.dan, ["필름", "한정"], "film"),
  item("seoul-sora", "another-seoul-1999", "sora", "황보소라", "1999: Another Seoul", seoul1999Src.sora, ["필름"], "film"),
  item("seoul-miro", "another-seoul-1999", "miro", "정미로", "1999: Another Seoul", seoul1999Src.miro, ["필름", "한정"], "film"),
  item("seoul-yeoreum", "another-seoul-1999", "yeoreum", "차여름", "1999: Another Seoul", seoul1999Src.yeoreum, ["필름"], "film"),
  item("seoul-bok", "another-seoul-1999", "bok", "박복", "1999: Another Seoul", seoul1999Src.bok, ["필름"], "film"),
  item("seoul-minwon", "another-seoul-1999", "minwon", "강민원", "1999: Another Seoul", seoul1999Src.minwon, ["필름", "한정"], "film"),
  item("seoul-nagyeong", "another-seoul-1999", "nagyeong", "선우나경", "1999: Another Seoul", seoul1999Src.nakyung, ["필름"], "film"),
  item("seoul-dahae", "another-seoul-1999", "dahae", "성다해", "1999: Another Seoul", seoul1999Src.dahae, ["필름"], "film"),

  item("otr-haesol", "off-the-record", "haesol", "곽해솔", "Off the Record", offRecordSrc.haesol, ["비하인드", "인기"], "landscape"),
  item("otr-dan", "off-the-record", "dan", "류단", "Off the Record", offRecordSrc.dan, ["비하인드"], "landscape"),
  item("otr-sora", "off-the-record", "sora", "황보소라", "Off the Record", offRecordSrc.sora, ["비하인드"], "landscape"),
  item("otr-miro", "off-the-record", "miro", "정미로", "Off the Record", offRecordSrc.miro, ["비하인드"], "landscape"),
  item("otr-yeoreum", "off-the-record", "yeoreum", "차여름", "Off the Record", offRecordSrc.yeoreum, ["비하인드"], "landscape"),
  item("otr-bok", "off-the-record", "bok", "박복", "Off the Record", offRecordSrc.bok, ["비하인드"], "landscape"),
  item("otr-minwon", "off-the-record", "minwon", "강민원", "Off the Record", offRecordSrc.minwon, ["비하인드"], "landscape"),
  item("otr-nagyeong", "off-the-record", "nagyeong", "선우나경", "Off the Record", offRecordSrc.nakyung, ["비하인드"], "landscape"),
  item("otr-dahae", "off-the-record", "dahae", "성다해", "Off the Record", offRecordSrc.dahae, ["비하인드"], "landscape"),

  item("pol-haesol", "birthday-polaroids", "haesol", "곽해솔", "Birthday Cafe", birthdayCafeSrc.haesol, ["폴라로이드", "컵홀더"], "polaroid"),
  item("pol-dan", "birthday-polaroids", "dan", "류단", "Birthday Cafe", birthdayCafeSrc.dan, ["폴라로이드"], "polaroid"),
  item("pol-sora", "birthday-polaroids", "sora", "황보소라", "Birthday Cafe", birthdayCafeSrc.sora, ["폴라로이드"], "polaroid"),
  item("pol-miro", "birthday-polaroids", "miro", "정미로", "Birthday Cafe", birthdayCafeSrc.miro, ["폴라로이드"], "polaroid"),
  item("pol-yeoreum", "birthday-polaroids", "yeoreum", "차여름", "Birthday Cafe", birthdayCafeSrc.yeoreum, ["폴라로이드"], "polaroid"),
  item("pol-bok", "birthday-polaroids", "bok", "박복", "Birthday Cafe", birthdayCafeSrc.bok, ["폴라로이드", "한정"], "polaroid"),
  item("pol-minwon", "birthday-polaroids", "minwon", "강민원", "Birthday Cafe", birthdayCafeSrc.minwon, ["폴라로이드", "컵홀더"], "polaroid"),
  item("pol-nagyeong", "birthday-polaroids", "nagyeong", "선우나경", "Birthday Cafe", birthdayCafeSrc.nakyung, ["폴라로이드", "사인", "본인 방문"], "polaroid"),
  item("pol-dahae", "birthday-polaroids", "dahae", "성다해", "Birthday Cafe", birthdayCafeSrc.dahae, ["폴라로이드", "사인", "본인 방문"], "polaroid"),
];

export function itemHunterIds(entry: GalleryItem): HunterId[] {
  return entry.hunterIds?.length ? entry.hunterIds : [entry.hunterId];
}

export function getItemsByGallery(id: GalleryId) {
  return galleryItems.filter((entry) => entry.galleryId === id);
}

export function getItemsByHunter(id: HunterId) {
  return galleryItems.filter((entry) => itemHunterIds(entry).includes(id));
}
