import type { CardCollection, HunterId, Photocard, Rarity } from "@/types";

function card(
  id: string,
  hunterId: HunterId,
  rarity: Rarity,
  collection: CardCollection,
  title: string,
  flavor: string,
  src: string,
): Photocard {
  return { id, hunterId, rarity, collection, title, flavor, src };
}

const profile = (id: HunterId, title: string, flavor: string) =>
  card(`pc-${id}-profile`, id, "NORMAL", "Profile", title, flavor, `/images/hunters/${id}/photocards/profile.png`);

const casual = (id: HunterId, title: string, flavor: string) =>
  card(`pc-${id}-casual`, id, "RARE", "Casual", title, flavor, `/images/hunters/${id}/photocards/casual.png`);

export const photocards: Photocard[] = [
  profile("haesol", "궤도 프로필", "중계 전에 찍힌 단정한 한 장."),
  casual("haesol", "케이블 이후", "대기실 조명이 조금 더 따뜻하다."),
  card("pc-haesol-otr", "haesol", "SPECIAL", "Off the Record", "바닥의 4초", "팬덤이 저장한 그 각도.", "/images/hunters/haesol/photocards/otr.png"),
  card("pc-haesol-poster", "haesol", "50K LIMITED", "Poster", "ORBIT 01", "공식 포스터의 크롭.", "/images/hunters/haesol/photocards/poster.png"),

  profile("dan", "밀크 프로필", "회복 방송 프로필 컷."),
  casual("dan", "봉지 하나", "퇴근길 캐주얼."),
  card("pc-dan-sd", "dan", "SPECIAL", "SD Animal", "크림빵 토끼", "동글동글 한정.", "/images/hunters/dan/photocards/sd.png"),
  card("pc-dan-pola", "dan", "50K LIMITED", "Birthday Polaroid", "식기 전", "생일카페 테이블 위.", "/images/hunters/dan/photocards/polaroid.png"),

  profile("sora", "버던트 프로필", "단독 계약 프로필."),
  casual("sora", "창가", "사람 적은 쪽을 고른 컷."),
  card("pc-sora-otr", "sora", "SPECIAL", "Off the Record", "3초", "인터뷰가 끝나기 직전.", "/images/hunters/sora/photocards/otr.png"),
  card("pc-sora-1999", "sora", "50K LIMITED", "1999", "SEOUL-99-009", "다른 서울의 골목.", "/images/hunters/sora/photocards/1999.png"),

  profile("miro", "엑시트 프로필", "퇴로 담당 프로필."),
  casual("miro", "개찰 전", "코트 깃을 세운 캐주얼."),
  card("pc-miro-sd", "miro", "SPECIAL", "SD Animal", "막차 새", "출구 쪽을 보는 작은 새.", "/images/hunters/miro/photocards/sd.png"),
  card("pc-miro-poster", "miro", "50K LIMITED", "Poster", "EXIT LIGHT", "낮은 조명의 포스터 크롭.", "/images/hunters/miro/photocards/poster.png"),

  profile("yeoreum", "클레임 프로필", "감정서용 단정 컷."),
  casual("yeoreum", "빨대", "보고서 옆의 오후."),
  card("pc-yeoreum-otr", "yeoreum", "SPECIAL", "Off the Record", "얼룩", "라떼가 먼저 도착한 컷.", "/images/hunters/yeoreum/photocards/otr.png"),
  card("pc-yeoreum-pola", "yeoreum", "50K LIMITED", "Birthday Polaroid", "케이크 대신", "초가 꺼진 뒤.", "/images/hunters/yeoreum/photocards/polaroid.png"),

  profile("bok", "라이선스 프로필", "면허 사진보다 환한 컷."),
  casual("bok", "인사", "게이트 앞의 각도."),
  card("pc-bok-sd", "bok", "SPECIAL", "SD Animal", "서류 햄스터", "체크리스트를 안은 SD.", "/images/hunters/bok/photocards/sd.png"),
  card("pc-bok-1999", "bok", "50K LIMITED", "1999", "SEOUL-99-022", "약도를 든 필름.", "/images/hunters/bok/photocards/1999.png"),

  profile("minwon", "라인 프로필", "전선 앞의 공식 컷."),
  casual("minwon", "어깨", "먼지가 남아 있는 캐주얼."),
  card("pc-minwon-otr", "minwon", "SPECIAL", "Off the Record", "11분 전", "선을 긋기 직전.", "/images/hunters/minwon/photocards/otr.png"),
  card("pc-minwon-poster", "minwon", "50K LIMITED", "Poster", "HOLD", "포스터 속의 직선.", "/images/hunters/minwon/photocards/poster.png"),

  profile("nagyeong", "레이시오 프로필", "숫자를 올리지 않은 얼굴."),
  casual("nagyeong", "반올림 없음", "스튜디오 밖의 코트."),
  card("pc-nagyeong-sd", "nagyeong", "SPECIAL", "SD Animal", "46 여우", "꼬리 끝의 숫자.", "/images/hunters/nagyeong/photocards/sd.png"),
  card("pc-nagyeong-1999", "nagyeong", "50K LIMITED", "1999", "46", "필름 넘버가 아니라 확률.", "/images/hunters/nagyeong/photocards/1999.png"),

  profile("dahae", "블러시 프로필", "광고 전의 프로필."),
  casual("dahae", "NG의 웃음", "본편에 안 넣은 표정."),
  card("pc-dahae-otr", "dahae", "SPECIAL", "Off the Record", "삼킨 대사", "테이크 사이.", "/images/hunters/dahae/photocards/otr.png"),
  card("pc-dahae-pola", "dahae", "50K LIMITED", "Birthday Polaroid", "기울어진 사인", "본인 방문 폴라.", "/images/hunters/dahae/photocards/polaroid.png"),
];

const weights: { rarity: Rarity; weight: number }[] = [
  { rarity: "NORMAL", weight: 50 },
  { rarity: "RARE", weight: 30 },
  { rarity: "SPECIAL", weight: 15 },
  { rarity: "50K LIMITED", weight: 5 },
];

export function drawPhotocard() {
  const total = weights.reduce((sum, row) => sum + row.weight, 0);
  let roll = Math.random() * total;
  let rarity: Rarity = "NORMAL";
  for (const row of weights) {
    roll -= row.weight;
    if (roll <= 0) {
      rarity = row.rarity;
      break;
    }
  }
  const pool = photocards.filter((entry) => entry.rarity === rarity);
  const source = pool.length > 0 ? pool : photocards;
  return source[Math.floor(Math.random() * source.length)] ?? photocards[0];
}

export function getCardsByHunter(id: HunterId) {
  return photocards.filter((entry) => entry.hunterId === id);
}

export const rarityOrder: Rarity[] = ["NORMAL", "RARE", "SPECIAL", "50K LIMITED"];

export const collectionOrder: CardCollection[] = [
  "Profile",
  "Casual",
  "Off the Record",
  "SD Animal",
  "1999",
  "Birthday Polaroid",
  "Poster",
];
