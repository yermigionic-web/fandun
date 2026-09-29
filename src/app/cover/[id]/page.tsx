import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PullQuote } from "@/components/editorial/PullQuote";
import { AffiliationBadge } from "@/components/hunter/AffiliationBadge";
import { RankBadge } from "@/components/hunter/RankBadge";
import { PageShell } from "@/components/layout/PageShell";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { coverStories, getCoverStory } from "@/data/coverStories";
import { getItemsByHunter } from "@/data/galleryItems";
import { getHunter, getNeighbors, hunters } from "@/data/hunters";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return hunters.map((hunter) => ({ id: hunter.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const story = getCoverStory(id);
  const hunter = getHunter(id);
  if (!story || !hunter) return { title: "Cover Story" };
  return { title: story.title, description: story.deck };
}

export default async function CoverArticlePage({ params }: Props) {
  const { id } = await params;
  const story = getCoverStory(id);
  const hunter = getHunter(id);
  if (!story || !hunter) notFound();
  const index = coverStories.findIndex((entry) => entry.id === story.id);
  const neighbors = getNeighbors(hunter.id);
  const related = getItemsByHunter(hunter.id).slice(0, 3);
  const prevStory = neighbors.prev ? getCoverStory(neighbors.prev.id) : undefined;
  const nextStory = neighbors.next ? getCoverStory(neighbors.next.id) : undefined;

  return (
    <PageShell>
      <Link href="/cover" className="inline-flex min-h-11 items-center text-sm text-muted">
        ← Cover Story
      </Link>
      <article className="mx-auto mt-4 max-w-3xl">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-muted">COVER STORY · {String(index + 1).padStart(2, "0")}</p>
        <MediaFrame
          src={hunter.images.poster}
          alt={`${story.title} 커버`}
          monogram={hunter.monogram}
          tone={hunter.theme}
          className="mt-4 aspect-[3/4] max-h-[78vh] w-full rounded-[28px]"
          eager
        />
        <h1 className="mt-10 font-editorial text-5xl font-medium italic leading-[0.95] md:text-7xl">{story.title}</h1>
        <p className="mt-5 font-editorial text-xl leading-relaxed text-muted">{story.deck}</p>
        <p className="mt-3 text-sm font-semibold">
          {hunter.nameKo} <span className="font-normal text-muted">{hunter.nameEn}</span>
        </p>
        <p className="mt-8 text-base leading-8">{story.intro}</p>
        <figure className="my-10">
          <MediaFrame
            src={hunter.images.standing}
            alt={`${hunter.nameKo} 초상`}
            silhouette={hunter.silhouette}
            tone={hunter.theme}
            align="bottom"
            className="aspect-[3/4] w-full rounded-[28px] md:aspect-[16/10]"
          />
          <figcaption className="mt-3 text-sm text-muted">{story.portraitCaption}</figcaption>
        </figure>
        <div className="space-y-8">
          {story.qa.map((pair) => (
            <div key={pair.q} className="flex gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-soft text-xs font-semibold">Q</span>
              <div>
                <p className="font-medium leading-relaxed">{pair.q}</p>
                <p className="mt-2 leading-relaxed text-muted">{pair.a}</p>
              </div>
            </div>
          ))}
        </div>
        <PullQuote quote={story.pullQuote} />
        <aside className="surface flex items-center gap-4 p-4">
          <MediaFrame src={hunter.images.profile} alt="" monogram={hunter.monogram} tone={hunter.theme} className="h-16 w-16 shrink-0 rounded-2xl" />
          <div>
            <p className="font-semibold">{hunter.nameKo}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <RankBadge rank={hunter.rank} label={hunter.rankLabel} />
              <AffiliationBadge affiliation={hunter.affiliation} />
            </div>
            <p className="mt-2 text-sm text-muted">
              {hunter.age} · {hunter.ability}
            </p>
          </div>
        </aside>
      </article>
      {related.length > 0 ? (
        <section className="mx-auto mt-12 max-w-3xl">
          <h2 className="text-xl font-semibold">함께 보면 좋은 장면</h2>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {related.map((item) => (
              <Link key={item.id} href={`/gallery/${item.galleryId}`}>
                <MediaFrame src={item.src} alt={item.title} monogram={hunter.monogram} tone={hunter.theme} className="aspect-[3/4] rounded-[18px]" />
              </Link>
            ))}
          </div>
        </section>
      ) : null}
      <nav className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
        {prevStory && neighbors.prev ? (
          <Link href={`/cover/${neighbors.prev.id}`} className="surface p-4">
            <p className="text-xs text-muted">이전 커버</p>
            <p className="mt-2 font-editorial text-2xl italic">{prevStory.title}</p>
          </Link>
        ) : null}
        {nextStory && neighbors.next ? (
          <Link href={`/cover/${neighbors.next.id}`} className="surface p-4 sm:text-right">
            <p className="text-xs text-muted">다음 커버</p>
            <p className="mt-2 font-editorial text-2xl italic">{nextStory.title}</p>
          </Link>
        ) : null}
      </nav>
    </PageShell>
  );
}
