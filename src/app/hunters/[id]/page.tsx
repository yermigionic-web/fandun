import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BirthdayCafeCard } from "@/components/birthday/BirthdayCafeCard";
import { CoverStoryCard } from "@/components/editorial/CoverStoryCard";
import { AffiliationBadge } from "@/components/hunter/AffiliationBadge";
import { OrgLogo } from "@/components/hunter/OrgLogo";
import { FavoriteButton } from "@/components/hunter/FavoriteButton";
import { RankBadge } from "@/components/hunter/RankBadge";
import { PageShell } from "@/components/layout/PageShell";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { PhotocardFace } from "@/components/photocards/PhotocardFace";
import { getCafeByHunter } from "@/data/birthdayCafeEvents";
import { coverStories } from "@/data/coverStories";
import { getItemsByHunter } from "@/data/galleryItems";
import { getHunter, getNeighbors, hunters } from "@/data/hunters";
import { getOrganization } from "@/data/organizations";
import { getCardsByHunter } from "@/data/photocards";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return hunters.map((hunter) => ({ id: hunter.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const hunter = getHunter(id);
  if (!hunter) return { title: "Hunter" };
  return { title: `${hunter.nameKo} ${hunter.nameEn}`, description: hunter.tagline };
}

export default async function HunterDetailPage({ params }: Props) {
  const { id } = await params;
  const hunter = getHunter(id);
  if (!hunter) notFound();
  const neighbors = getNeighbors(hunter.id);
  const moments = hunter.legendMoments;
  const images = getItemsByHunter(hunter.id).slice(0, 4);
  const story = coverStories.find((entry) => entry.id === hunter.id);
  const storyIndex = coverStories.findIndex((entry) => entry.id === hunter.id);
  const cafe = getCafeByHunter(hunter.id);
  const cards = getCardsByHunter(hunter.id);
  const organization = getOrganization(hunter.organizationId);

  return (
    <PageShell>
      <Link href="/hunters" className="inline-flex min-h-11 items-center text-sm text-muted">
        ← Hunters
      </Link>
      <header className="surface mt-4 overflow-hidden">
        <MediaFrame src={hunter.images.header} alt="" monogram={hunter.monogram} tone={hunter.theme} fit="cover" className="aspect-[3/2] w-full" />
        <div className="grid gap-6 p-5 md:grid-cols-[240px_1fr] md:p-8">
          <MediaFrame
            src={hunter.images.standing}
            alt={`${hunter.nameKo} 전신`}
            silhouette={hunter.silhouette}
            tone={hunter.theme}
            align="bottom"
            className="aspect-[3/4] w-full rounded-[24px]"
          />
          <div>
            <div className="flex flex-wrap gap-2">
              <RankBadge rank={hunter.rank} label={hunter.rankLabel} />
              <AffiliationBadge affiliation={hunter.affiliation} logo={organization.logo} />
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">{hunter.nameKo}</h1>
            <p className="mt-1 text-muted">{hunter.nameEn}</p>
            <p className="mt-4 text-lg">{hunter.tagline}</p>
            <p className="mt-2 text-sm text-muted">팬덤 네임 · {hunter.fandomName}</p>
            <div className="mt-6">
              <FavoriteButton hunterId={hunter.id} />
            </div>
          </div>
        </div>
      </header>

      <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="surface p-4">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-muted">나이</p>
          <p className="mt-2 font-semibold">{hunter.age}세</p>
        </div>
        <div className="surface p-4">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-muted">직책</p>
          <p className="mt-2 font-semibold">{hunter.position}</p>
        </div>
        <div className="surface p-4">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-muted">소속</p>
          <p className="mt-2 flex items-center gap-2 font-semibold">
            <OrgLogo src={organization.logo} size={24} />
            {hunter.affiliation.ko}
          </p>
        </div>
        <div className="surface p-4">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-muted">능력</p>
          <p className="mt-2 font-semibold">{hunter.ability}</p>
        </div>
      </section>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{hunter.abilityDetail}</p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Legend Moments</h2>
        <div className="mt-4 grid gap-3">
          {moments.map((moment) => (
            <article key={moment.title} className="surface p-5">
              <h3 className="font-semibold">{moment.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{moment.body}</p>
            </article>
          ))}
        </div>
      </section>

      {images.length > 0 ? (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Related Gallery</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {images.map((item) => (
              <Link key={item.id} href={`/gallery/${item.galleryId}`} className="portal-card">
                <MediaFrame src={item.src} alt={item.title} monogram={hunter.monogram} tone={hunter.theme} className="aspect-[3/4] rounded-[22px]" />
                <p className="mt-2 text-sm font-medium">{item.title}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {story ? (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Cover Story</h2>
          <div className="mt-4 max-w-md">
            <CoverStoryCard story={story} index={storyIndex} />
          </div>
        </section>
      ) : null}

      {cafe ? (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Birthday Cafe</h2>
          <div className="mt-4 max-w-xl">
            <BirthdayCafeCard event={cafe} />
          </div>
        </section>
      ) : null}

      <section className="mt-12">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-2xl font-semibold">Photocards</h2>
          <Link href="/pack" className="inline-flex min-h-11 items-center text-sm font-semibold">
            팩에서 만나기
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {cards.map((card) => (
            <PhotocardFace key={card.id} card={card} hunter={hunter} />
          ))}
        </div>
      </section>

      <nav className="mt-12 grid gap-3 sm:grid-cols-2">
        {neighbors.prev && neighbors.next ? (
          <>
            <Link href={`/hunters/${neighbors.prev.id}`} className="surface p-4">
              <p className="text-xs text-muted">이전</p>
              <p className="mt-1 font-semibold">{neighbors.prev.nameKo}</p>
            </Link>
            <Link href={`/hunters/${neighbors.next.id}`} className="surface p-4 text-right">
              <p className="text-xs text-muted">다음</p>
              <p className="mt-1 font-semibold">{neighbors.next.nameKo}</p>
            </Link>
          </>
        ) : null}
      </nav>
    </PageShell>
  );
}
