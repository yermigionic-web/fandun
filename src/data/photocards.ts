import { photocardSrc } from "@/data/photocardImages";
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
  card(`pc-${id}-profile`, id, "NORMAL", "Profile", title, flavor, photocardSrc[id].profile);

const casual = (id: HunterId, title: string, flavor: string) =>
  card(`pc-${id}-casual`, id, "RARE", "Casual", title, flavor, photocardSrc[id].casual);

export const photocards: Photocard[] = [
  profile(
    "haesol",
    "OFFICIAL PROFILE — S-CLASS / SEON HUNTERS",
    "곽해솔 / 27 / S급 / 〈궤도〉\n세온헌터스 메인 레이드팀 소속. 면허번호 끝자리 0723.\n\"포카용 사진 찍을 땐 웃지 말래서 참았어요. 근데 셔터 소리 나자마자 웃음 터졌어요. B컷 폴더에 있대요.\"",
  ),
  casual(
    "haesol",
    "퇴근 후 편의점 앞 ☕",
    "후드 모자 대충 쓰고 안경, 집게핀. 한 손엔 1+1 바나나우유 두 개.\n\"하나는 내일 거예요. 내일 아침에 제가 이걸 기억할지는 모르겠지만.\"\n(뒷면 손글씨: 위성들아 밥 먹었어? 나는 이게 밥임)",
  ),
  card(
    "pc-haesol-otr",
    "haesol",
    "SPECIAL",
    "Off the Record",
    "ORBIT — 공중 정지 컷",
    "레이드 직후, 궤도로 멈춰 세운 파편들 사이에 서 있는 해솔. 볼에 그을음 한 줄.\n\"이 사진 찍힌 줄 몰랐어요. 저 때 무슨 생각했냐면… 장갑 하나 잃어버렸다는 생각했어요. 회사 비품이라 반납해야 되거든요.\"\n※ 장갑은 결국 못 찾음. 경위서 제출 완료.",
    photocardSrc.haesol.special,
  ),
  card(
    "pc-haesol-poster",
    "haesol",
    "50K LIMITED",
    "Poster",
    "☄️ 0723 BIRTHDAY LIMITED (생카 현장 수령 한정 / 총 300매)",
    "생일 케이크 촛불 앞에서 눈 꼭 감고 소원 비는 컷. 고깔모자 비뚤어짐. 생카 현장 수령 한정, 총 300매.\n\"소원은 비밀인데요, 힌트 드리면… 이번 주 스케줄 두 개만 빠졌으면 좋겠다. 아 이거 말하면 안 되나?\"\n(뒷면: 직접 사인 + \"내년에도 와줄 거지? 나도 갈게\")",
    photocardSrc.haesol.limited,
  ),

  profile(
    "dan",
    "OFFICIAL PROFILE — A-CLASS / TAERIM GUILD FIELD TEAM",
    "류단 / 32 / A급 / 〈적응〉\n태림길드 현장팀장. 각성 등급 C → 현재 A (재평가 3회).\n\"웃으라고 해서 웃었는데 '팀장님 그거 웃는 거예요?' 하더라고요. 웃는 거 맞아요. 이게 제 최대치예요.\"",
  ),
  casual(
    "dan",
    "퇴근길 빵집 앞 🥐",
    "후드 집업에 트레이닝 팬츠, 목덜미까지 짧게 정리된 머리. 진열장 앞에서 크림빵 두 개를 든 사진.\n(뒷면 손글씨: 너희 오늘 스트레칭 했어? 안 했으면 지금 해. 30초만.)",
  ),
  card(
    "pc-dan-sd",
    "dan",
    "SPECIAL",
    "SD Animal",
    "ADAPT — 13분째의 얼굴",
    "구로 게이트 당시 재난청 현장에서 촬영. 땀과 먼지로 얼룩진 얼굴, 이를 악물지도 않은 평온한 숨. 뒤로 갈라진 아스팔트.\n\"저 때 안 힘들었냐고 많이 물어보시는데, 힘들었어요. 근데 5분 지나니까 몸이 익숙해졌어요. 대단한 거 아니고 그냥 그렇게 생겨먹은 거예요.\"\n※ 촬영 직후 구급차 탑승. 갈비뼈 미세골절 2개. 산재 처리 완료.",
    photocardSrc.dan.special,
  ),
  card(
    "pc-dan-pola",
    "dan",
    "50K LIMITED",
    "Birthday Polaroid",
    "🥖 1114 BIRTHDAY LIMITED (생카 현장 수령 한정 / 총 250매)",
    "생일 크림빵에 초 하나 꽂고 그걸 내려다보는 류단. 불 끄기 직전, 한쪽 보조개가 깊게 패여 있다.\n\"초 하나 꽂은 이유요? 많이 꽂으면 빵이 망가져서요. 그리고 생일 같은 거 굳이 세지 않아도 돼요. 오늘 하루 잘 쉬면 됐지.\"\n(뒷면: 직접 사인 + \"오늘은 훈련 없음. 진짜로. 집 가서 자요.\")",
    photocardSrc.dan.limited,
  ),

  profile(
    "sora",
    "OFFICIAL PROFILE — A-CLASS / HASTY WANDERERS CONTRACT HUNTER",
    "황보소라 / 25 / A급 (S급 후보 판정) / 〈단절〉\n해스티원더러즈 계약헌터. 단독 게이트 클리어 길드 내 1위. 팀 협업 평가 항목 '측정 불가'.\n\"사진은 똑같은데 이름만 다시 뽑느라 이틀 걸렸대요. 이번 건 맞아요.\"",
  ),
  casual(
    "sora",
    "새벽 3시 편의점, 레이드 끝나고 🍙",
    "검은 후드, 피어싱 다시 낀 오른쪽 귀. 삼각김밥 두 개와 컵라면을 들고 계산대 앞에 선 채 고개만 살짝 돌린 컷. 뿌리 염색은 여전히 안 함.\n(뒷면 손글씨: 밥 먹고 자라. 나도 그럴 거임)",
  ),
  card(
    "pc-sora-otr",
    "sora",
    "SPECIAL",
    "Off the Record",
    "SEVERED — 회색 바이탈",
    "인천항 레이드 당시 길드 지휘 모니터 화면 캡처. 팀원 바이탈 그래프 여섯 줄이 초록인데 한 줄만 회색으로 '신호 없음'. 그 옆 현장 카메라 속, 컨테이너 사이를 혼자 걸어 나오는 실루엣.\n\"회색 뜨면 사람들이 걱정한대요. 근데 저는 회색일 때가 제일 조용해서 좋아요. 걱정은 나와서 해 주세요. 그때 들을게요.\"\n※ 해당 레이드 지휘 불응 경고 1회 / 단독 클리어 수당 지급 완료. 둘 다 같은 날 처리됨.",
    photocardSrc.sora.special,
  ),
  card(
    "pc-sora-1999",
    "sora",
    "50K LIMITED",
    "1999",
    "🐚 0817 BIRTHDAY LIMITED (생카 현장 수령 한정 / 총 200매)",
    "여수 바닷가 방파제에 혼자 쪼그려 앉아 케이크 대신 컵 아이스크림에 초 하나 꽂은 컷. 바람에 애시그린 머리 끝이 다 날림. 초는 이미 꺼져 있음.\n\"바람 불어서 꺼진 거예요. 소원은 못 빌었어요. 근데 괜찮아요. 집 왔으니까 그게 소원이었어요.\"\n(뒷면: 직접 사인 + \"생일 축하 안 해도 되는데 해주면 좋긴 함\")",
    photocardSrc.sora.limited,
  ),

  profile(
    "miro",
    "OFFICIAL PROFILE — B-CLASS / FREELANCE SEARCH & RESCUE",
    "정미로 / 29 / B급 (탐색 부문 A급 평가) / 〈경로감각〉\n프리랜서 탐색·구조 헌터. 현장 투입 인원 전원 귀환 기록 유지 중.\n\"프로필 촬영 때 웃으라고 하셔서 웃었는데, 다들 '좀 더!'라고 하셨어요. 저 그때 많이 웃은 거였어요… 정말이에요.\"",
  ),
  casual(
    "miro",
    "비 오는 날 편의점 처마 밑 ☔",
    "후드 없는 얇은 카디건, 우산 없이 처마 밑에 선 채 휴대폰으로 찍은 컷. 은테 안경에 빗방울 두어 개.\n\"택시 부를까 하다가 그냥 비 그칠 때까지 기다렸어요. 40분. 부르는 게 더 어려워서요.\"\n(뒷면 손글씨: 우산 꼭 챙기세요… 저는 이날 못 챙겼어요)",
  ),
  card(
    "pc-miro-sd",
    "miro",
    "SPECIAL",
    "SD Animal",
    "HEADCOUNT — 여섯, 전원 확인",
    "평택 붕괴 당시 바디캠 캡처. 헤드랜턴 불빛이 뒤를 향하고, 손가락 여섯 개를 펴 든 실루엣. 뒤로 무너지기 시작한 천장 균열.\n\"이 사진 보면 아직 좀 손이 떨려요. 근데 손가락 여섯 개는 맞게 펴져 있어서 다행이에요. 다섯이었으면 이 카드 안 만들었을 거예요.\"\n※ 해당 작전 탐색 수당 및 위험수당 지급 완료. 본인 장비 손실분 보험 청구는 영수증 하나 누락으로 2주 지연.",
    photocardSrc.miro.special,
  ),
  card(
    "pc-miro-poster",
    "miro",
    "50K LIMITED",
    "Poster",
    "🧭 0511 BIRTHDAY LIMITED (생카 현장 수령 한정 / 총 200매)",
    "작은 케이크 앞, 초 대신 미니 비상구 표시등 모형이 꽂혀 있음. 미로가 그걸 두 손으로 가리듯 감싸며 아주 작게 웃는 컷. 운영진이 준비한 거라 본인은 촬영 내내 볼이 빨갰음.\n\"초는 불이 나니까… 이게 오히려 마음이 편했어요. 이상하죠. 그래도 좋았어요.\"\n(뒷면: 직접 사인 + \"다들 오늘도 무사히 집에 가세요. 그게 제일 좋은 선물이에요.\")",
    photocardSrc.miro.limited,
  ),

  profile(
    "yeoreum",
    "OFFICIAL PROFILE — C-CLASS / HANGYEOL INSURANCE SPECIAL DISASTER TEAM",
    "차여름 / 37 / C급 (겸업) / 〈고정〉\n한결손해보험 특수재해팀 과장. 재난 손해조사 누적 412건. 보고서 반려율 0%.\n\"프로필 사진 사원증 사진이랑 같은 거 쓰면 안 되냐고 물어봤는데 안 된대요. 그래서 안경만 바꿨어요.\"",
  ),
  casual(
    "yeoreum",
    "금요일 퇴근, 은행 ATM 앞 🏧",
    "실버 후프 귀걸이, 사복 니트. 한 손엔 아이스 아메리카노. 은행 마감 3분 전.\n\"적금 만기라 통장 정리하러 왔어요. 앱으로 되는 거 아는데, 종이로 찍히는 게 좋아요.\"\n(뒷면 손글씨: 이번 달 카드값 확인하셨어요? 얼른 하자~)",
  ),
  card(
    "pc-yeoreum-otr",
    "yeoreum",
    "SPECIAL",
    "Off the Record",
    "HOLD — 7분의 기둥",
    "성수 지하상가 붕괴 당시 바디캠 캡처. 금 간 기둥에 한 손을 댄 채, 다른 손으로 대피 방향을 가리키는 실루엣. 안경 한쪽 렌즈에 먼지.\n\"이때 안경 렌즈 긁혔어요. 업무 중 손상이라 청구했고요, 승인 났어요. 그 얘기 해도 되죠?\"\n※ 오른쪽 무릎 통증으로 이틀 병가. 산재 서류 본인이 직접 작성, 당일 제출.",
    photocardSrc.yeoreum.special,
  ),
  card(
    "pc-yeoreum-pola",
    "yeoreum",
    "50K LIMITED",
    "Birthday Polaroid",
    "📋 0621 BIRTHDAY LIMITED (생카 현장 수령 한정 / 총 200매)",
    "팀 사무실 책상 위, 결재 서류 더미 사이에 놓인 조각 케이크. 초 대신 꽂힌 볼펜 하나. 그걸 보고 코를 찡긋하며 웃는 컷.\n\"후배들이 초 사 오는 거 까먹었대요. 볼펜이면 됐죠. 불도 안 나고, 다 먹고 나서 쓸 수도 있고.\"\n(뒷면: 직접 사인 + \"생일 축하는 감사히 받을게요. 선물은 영수증 첨부해서 주세요. 농담이에요.\")",
    photocardSrc.yeoreum.limited,
  ),

  profile(
    "bok",
    "OFFICIAL PROFILE — F-CLASS / INDEPENDENT HUNTER",
    "박복 / 23 / F급 / 〈진동감지〉\n개인 헌터. 단건 계약 누적 63건. 철수 판단 적중률 100%.\n\"프로필 사진 진지하게 찍으래서 진지하게 찍었는데 친구들이 '너 증명사진 같다'고 함. 그럼 맞게 찍은 거 아님?\"",
  ),
  casual(
    "bok",
    "셀프 염색 D+1 🧡",
    "화장실 거울 셀카. 목에 비닐 랩 감은 채, 귀 뒤에 오렌지 염색약 얼룩. 한 손으로 브이.\n\"뒷머리 안 보여서 대충 했는데 친구가 거기만 색 안 들었대요. 괜찮아요 울프컷이라 티 안 나요. 아마.\"\n(뒷면 손글씨: 염색약은 다이소가 제일 쌈 ㅋㅋ)",
  ),
  card(
    "pc-bok-sd",
    "bok",
    "SPECIAL",
    "SD Animal",
    "SENSE — 손바닥 아래 여덟",
    "시흥 던전 바디캠 캡처. 바닥에 엎드려 양 손바닥을 댄 채 고개만 들어 렌즈를 보는 컷. 헤드랜턴 빛 아래 진지한 올리브색 눈.\n\"이때 일곱 마리라고 했다가 여덟로 고쳤잖아요. 하나 놓칠 뻔해서 아직도 좀 분해요. 다음엔 한 번에 맞힐 거임.\"\n※ 매복 탐지 기여로 수당 균등 분배 확정. 무릎 보호대 찢어져서 중고로 재구매(1만 2천 원).",
    photocardSrc.bok.special,
  ),
  card(
    "pc-bok-1999",
    "bok",
    "50K LIMITED",
    "1999",
    "🍀 0113 BIRTHDAY LIMITED (생카 현장 수령 한정 / 총 200매)",
    "생카 복권 슬로건을 긁어 '꽝'이 나온 걸 카메라에 들이밀며 윗니 다 보이게 웃는 컷. 뒤로 핫팩 뜯은 비닐.\n\"꽝ㅋㅋ 근데 여기 다 나 보러 온 거잖아요. 그럼 당첨 아님? 개이득.\"\n(뒷면: 직접 사인 + 별 낙서 + \"던전 같이 갈 덩이 구함\")",
    photocardSrc.bok.limited,
  ),

  profile(
    "minwon",
    "OFFICIAL PROFILE — B-CLASS / NATIONAL DISASTER RESPONSE AGENCY",
    "강민원 / 36 / B급 / 〈경계〉\n국가재난대응청 서울동부현장통제과 현장통제관. 도심 재난 통제 누적 287건. 통제선 내 민간인 사망 0.\n\"프로필 사진은 공무원증 사진이랑 같은 날 찍었습니다. 한 번에 끝내는 게 효율적이라서요.\"",
  ),
  casual(
    "minwon",
    "비번 토요일, 동네 마트 🛒",
    "후드 집업에 휴일 금귀걸이. 마트 카트에 대파, 두부, 믹스커피 대용량 한 박스. 차림으로 셀카 컷.\n(뒷면 손글씨: 믹스커피는 사무실용 아니고 집용입니다. 사무실 건 따로 있어요.)",
  ),
  card(
    "pc-minwon-otr",
    "minwon",
    "SPECIAL",
    "Off the Record",
    "LINE — 잠실 사거리, 11분",
    "잠실 게이트 당시 바디캠 캡처. 교차로 바닥을 따라 희미하게 빛나는 경계선 앞, 한 팔을 옆으로 뻗어 뒤를 막은 채 정면을 보는 실루엣.\n\"이 각도면 제가 S급분 막고 있는 것처럼 보이는데요...\"\n※ 상황 종료 후 경위서 3장, 출장비 정산 1건, 야간 수당 신청 1건 당일 처리.",
    photocardSrc.minwon.special,
  ),
  card(
    "pc-minwon-poster",
    "minwon",
    "50K LIMITED",
    "Poster",
    "🟥 1204 BIRTHDAY LIMITED (생카 현장 수령 한정 / 총 200매)",
    "당직실 책상 위, 후배들이 몰래 둔 컵케이크 하나와 '처리 완료' 도장이 찍힌 포스트잇. 그걸 내려다보며 입을 손으로 가린 컷.\n\"당직 중엔 원래 아무것도 안 받는데요. 이건 도장이 찍혀 있어서 처리된 걸로 봤습니다.\"\n(뒷면: 직접 사인 + \"생일 축하는 감사히 받습니다. 대피 훈련도 꼭 받으세요.\")",
    photocardSrc.minwon.limited,
  ),

  profile(
    "nagyeong",
    "OFFICIAL PROFILE — NON-AWAKENED / SEON HUNTERS RAID STRATEGY OFFICE",
    "선우나경 / 34 / 비각성자 / —\n세온헌터스 레이드전략실장. 작전 설계 누적 196건. 최근 3년 설계 작전 사망자 0.\n\"능력란에 하이픈 넣는 거, 제가 요청했습니다. 비워 두면 오류처럼 보여서….\"",
  ),
  casual(
    "nagyeong",
    "비효율적인 퇴근길 🚶",
    "트렌치코트, 낮게 묶은 백금발. 지하철역 입구를 지나쳐 한 정거장 더 걸어가는 뒷모습. 한 손엔 테이크아웃 커피, 다른 손은 주머니에.\n(뒷면 손글씨: 이건 왜 찍으시는 건가요)",
  ),
  card(
    "pc-nagyeong-sd",
    "nagyeong",
    "SPECIAL",
    "SD Animal",
    "RETREAT LINE",
    "부산 공동입찰 회의 당시 촬영 컷. 대형 스크린에 띄운 생존예측 그래프 앞에서 레이저포인터를 내린 채 정면을 보는 옆얼굴. 화면 하단에 붉은 철수선.\n\"다들 제가 화난 줄 아시는데, 그날 커피를 못 마셔서 그래요.\"\n※ 회의 종료 후 회의록 14쪽 당일 배포. 수정 요청 0건.",
    photocardSrc.nagyeong.special,
  ),
  card(
    "pc-nagyeong-1999",
    "nagyeong",
    "50K LIMITED",
    "1999",
    "📊 0310 BIRTHDAY LIMITED (생카 현장 수령 한정 / 총 200매)",
    "전략실, 작은 다육이 화분을 들고 찍은 나경의 셀카. 머리를 꼭 묶고 있다.\n\"30일 간격이라고 들었는데, 대충이라고 해서요. 28일에서 33일 사이로 잡았습니다. 대충이에요.\"\n(뒷면: 직접 사인)",
    photocardSrc.nagyeong.limited,
  ),

  profile(
    "dahae",
    "OFFICIAL PROFILE — A-CLASS / SEON HUNTERS",
    "성다해 / 22 / A급 / 〈편광〉\n세온헌터스 소속. 데뷔 레이드 참여 37건. 보호 대상 사망 0.\n\"프로필 촬영 전에 각도 체크했어요. 왼쪽이 더 예쁜, 아, 이거 말하면 안 되는 거였나요?\"",
  ),
  casual(
    "dahae",
    "트레이닝센터 거울 앞 🪞",
    "모니터링 유니폼, 반 묶음 머리. 거울에 비친 자신을 보며 손끝으로 공중에 작은 굴절면을 그려 보는 옆모습. 바닥에 땀 몇 방울.\n\"스쿼트 세트 사이에 능력 복습해요. 손가락 각도 1도 틀어지면 광선이 2m 밀려요. 쉬는 시간이 제일 중요해요.\"\n(뒷면 손글씨: 오늘 세트 수 4/4. 내일은 다리 쉬는 날이에요. 다리만요.)",
  ),
  card(
    "pc-dahae-otr",
    "dahae",
    "SPECIAL",
    "Off the Record",
    "PRISM — 광화문의 7분",
    "광화문 바디캠 캡처. 공중에 겹겹의 투명한 굴절면이 희미한 무지개로 떠 있고, 그 앞에서 양손을 벌린 채 입술을 꾹 다문 성다해의 뒷모습. 등 뒤로 쪼그린 시민 24명의 실루엣.\n\"버틴 거 아니에요, 직업인데. …집에 가서는 좀 울었어요. 아뇨 적으셔도 돼요.\"\n※ 작전 종료 후 24시간 모니터링. 손가락 미세 떨림 2일. 다음 작전까지 공식 휴식 72시간.",
    photocardSrc.dahae.special,
  ),
  card(
    "pc-dahae-pola",
    "dahae",
    "50K LIMITED",
    "Birthday Polaroid",
    "💎 0720 BIRTHDAY LIMITED (생카 현장 수령 한정 / 총 250매)",
    "등신대 다해냥이 인형 옆에 쭈그려 앉아 인형 머리띠를 매만지는 컷. 입은 반쯤 벌어져 있고 눈은 당황인지 웃음인지 모를 상태.\n(뒷면: 직접 사인 + \"감사하고, 좋아요. ……이거 모범답안인가요?\")",
    photocardSrc.dahae.limited,
  ),
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
