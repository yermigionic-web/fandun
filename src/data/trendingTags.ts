import type { HunterId, TrendingTag } from "@/types";

export const trendingTags: TrendingTag[] = [
  { id: "haesol-orbit", label: "궤도_이탈_금지", hot: true, count: 18903 },
  { id: "dahae-ad", label: "성다해의_모범답안", hot: true, count: 9733 },
  { id: "dan-bread", label: "류단_오늘도_해냈다", count: 6420 },
  { id: "sora-cut", label: "황보가_성이에요!", count: 2880 },
  { id: "bok-d", label: "박복_장비외웠다고", hot: true, count: 2614 },
  { id: "nagyeong-46", label: "나경이_회의록에_남기죠", count: 440 },
  { id: "miro-train", label: "정미로_인원확인_완료", count: 6342 },
  { id: "yeoreum-coffee", label: "차여름_회의록", count: 4207 },
  { id: "minwon-line", label: "민원인들_안전선뒤로가세요", count: 1882 },
];

/** Slot 2–3 per hunter. Home shows trendingTags only, until these rotate in. */
export const trendingTagQueue: { hunterId: HunterId; label: string }[] = [
  { hunterId: "haesol", label: "해솔아_밥먹자" },
  { hunterId: "haesol", label: "S급이_웃겨서_과해" },
  { hunterId: "dan", label: "팀장님_보조개_목격담" },
  { hunterId: "dan", label: "태림탓_금지구역" },
  { hunterId: "sora", label: "소라_집에보내줘" },
  { hunterId: "sora", label: "단절_들어가면_아무도못건드림" },
  { hunterId: "miro", label: "미로님_현장모드_목소리" },
  { hunterId: "miro", label: "출구농담_금지" },
  { hunterId: "yeoreum", label: "과장님_왜요" },
  { hunterId: "yeoreum", label: "여름에_퇴근한_당신은" },
  { hunterId: "bok", label: "애호등급_S" },
  { hunterId: "bok", label: "복이_지켜줄래" },
  { hunterId: "minwon", label: "팬서비스는_나중에" },
  { hunterId: "minwon", label: "통제관님_비번에도_보고싶어" },
  { hunterId: "nagyeong", label: "헌터들_서류방치_금지" },
  { hunterId: "nagyeong", label: "세온_대표_차카니" },
  { hunterId: "dahae", label: "차세대_셀럽은_준비된자의것" },
  { hunterId: "dahae", label: "똑똑이_다해가_다해" },
];
