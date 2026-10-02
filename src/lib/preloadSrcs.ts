import { birthdayCafeEvents } from "@/data/birthdayCafeEvents";
import { galleryItems } from "@/data/galleryItems";
import { hunters } from "@/data/hunters";
import { organizations } from "@/data/organizations";
import { photocards } from "@/data/photocards";
import { pickCardSrc } from "@/data/pickCards";

const listed = [
  ...hunters.flatMap((hunter) => Object.values(hunter.images)),
  ...Object.values(pickCardSrc),
  ...galleryItems.map((item) => item.src),
  ...photocards.map((card) => card.src),
  ...birthdayCafeEvents.flatMap((event) => [event.image, event.signedPolaroid]),
  ...Object.values(organizations).map((organization) => organization.logo),
];

export const preloadSrcs = [...new Set(listed.filter((src): src is string => Boolean(src)))];
