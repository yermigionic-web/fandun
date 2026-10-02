export const hunterIds = [
  "haesol",
  "dan",
  "sora",
  "miro",
  "yeoreum",
  "bok",
  "minwon",
  "nagyeong",
  "dahae",
] as const;

export type HunterId = (typeof hunterIds)[number];

export const galleryIds = [
  "hunter-posters",
  "sd-animal",
  "another-seoul-1999",
  "off-the-record",
  "birthday-polaroids",
] as const;

export type GalleryId = (typeof galleryIds)[number];

export type Rank = "S" | "A" | "B" | "C" | "D" | "E" | "F";
export type SilhouetteVariant = "long" | "bob" | "tie" | "short";

export type Affiliation = {
  id: string;
  en: string;
  ko: string;
  mark: string;
};

export const organizationIds = ["seohn", "taerim", "hawon", "hankyul", "ndra", "independent"] as const;

export type OrganizationId = (typeof organizationIds)[number];

export type HunterTheme = {
  primary: string;
  secondary: string;
  soft: string;
  glow: string;
  backgroundAccent: string;
};

export type LegendMoment = {
  title: string;
  body: string;
};

export type Hunter = {
  id: HunterId;
  nameKo: string;
  nameEn: string;
  assetPrefix: string;
  age: number;
  birthday: string;
  rank: Rank | null;
  rankLabel: string;
  rankEmblem: string;
  affiliation: Affiliation;
  organizationId: OrganizationId;
  position: string;
  ability: string;
  abilityDetail: string;
  monogram: string;
  silhouette: SilhouetteVariant;
  fandomName: string;
  fandomNote?: string;
  tagline: string;
  description: string;
  statusLine: string;
  legendMoments: LegendMoment[];
  theme: HunterTheme;
  images: {
    standing: string;
    profile: string;
    thumb: string;
    header: string;
    poster: string;
    interview: string;
  };
};

export type GalleryMood = "editorial" | "playful" | "retro" | "candid" | "polaroid";

export type Gallery = {
  id: GalleryId;
  title: string;
  subtitle: string;
  description: string;
  badge?: "NEW" | "LIMITED" | "POPULAR";
  mood: GalleryMood;
  cover: string;
  coverHunterId: HunterId;
};

export type Aspect = "portrait" | "square" | "film" | "landscape" | "polaroid";

export type GalleryItem = {
  id: string;
  galleryId: GalleryId;
  hunterId: HunterId;
  hunterIds?: HunterId[];
  title: string;
  caption?: string;
  src: string;
  tags: string[];
  aspect: Aspect;
};

export type CafeTag = "본인 방문" | "SIGNED" | "LIMITED" | "CUP HOLDER" | "PHOTO CARD";

export type BirthdayCafeEvent = {
  id: string;
  hunterId: HunterId;
  title: string;
  location: string;
  dates: string;
  start: string;
  benefits: string[];
  tags: CafeTag[];
  visited: boolean;
  featured?: boolean;
  note?: string;
  image?: string;
  signedPolaroid?: string;
};

export type Rarity = "NORMAL" | "RARE" | "SPECIAL" | "50K LIMITED";

export type CardCollection =
  | "Profile"
  | "Casual"
  | "Off the Record"
  | "SD Animal"
  | "1999"
  | "Birthday Polaroid"
  | "Poster";

export type Photocard = {
  id: string;
  hunterId: HunterId;
  rarity: Rarity;
  collection: CardCollection;
  title: string;
  flavor: string;
  src: string;
};

export type FanboardCategory = "HOT" | "SIGHTING" | "RAID CAM" | "BIRTHDAY" | "MERCH" | "GENERAL";

export type FanboardPost = {
  id: string;
  category: FanboardCategory;
  title: string;
  excerpt: string;
  username: string;
  likes: number;
  comments: number;
  tags: string[];
  time: string;
  hunterId?: HunterId;
  highlight?: boolean;
};

export type TrendingTag = {
  id: string;
  label: string;
  hot?: boolean;
  count: number;
};

export type CoverStory = {
  id: HunterId;
  title: string;
  deck: string;
  intro: string;
  pullQuote: string;
  portraitCaption: string;
  outro?: string;
  qa: { q: string; a: string }[];
};

export function isHunterId(value: string | null | undefined): value is HunterId {
  return !!value && (hunterIds as readonly string[]).includes(value);
}

export function isGalleryId(value: string): value is GalleryId {
  return (galleryIds as readonly string[]).includes(value);
}
