import Link from "next/link";
import { BirthdayCafeCard } from "@/components/birthday/BirthdayCafeCard";
import { FanboardPostCard } from "@/components/fanboard/FanboardPostCard";
import { TrendingTag } from "@/components/fanboard/TrendingTag";
import { GalleryCard } from "@/components/gallery/GalleryCard";
import { HunterCard } from "@/components/hunter/HunterCard";
import { Container } from "@/components/layout/Container";
import { RuneRing } from "@/components/effects/RuneRing";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedCafes } from "@/data/birthdayCafeEvents";
import { getHighlightPosts } from "@/data/fanboardPosts";
import { galleries } from "@/data/galleries";
import { getItemsByGallery } from "@/data/galleryItems";
import { hunters } from "@/data/hunters";
import { trendingTags } from "@/data/trendingTags";
import { cn } from "@/lib/cn";

export function HomeFeed() {
  const cafes = getFeaturedCafes();
  const posts = getHighlightPosts();

  return (
    <>
      <section className="py-14">
        <Container>
          <SectionHeading
            eyebrow="50K SPECIAL"
            title="다섯 개의 한정 아카이브"
            action={
              <Link href="/gallery" className="inline-flex min-h-11 items-center text-sm font-semibold">
                전체 보기
              </Link>
            }
          />
          <div className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-12 lg:gap-5 lg:overflow-visible lg:px-0">
            {galleries.map((gallery, index) => (
              <div
                key={gallery.id}
                className={cn(
                  "w-[82vw] shrink-0 snap-center sm:w-[46vw] lg:w-auto lg:col-span-4",
                  index === 0 && "lg:col-span-7",
                  index === 1 && "lg:col-span-5",
                )}
              >
                <GalleryCard
                  gallery={gallery}
                  count={getItemsByGallery(gallery.id).length}
                  index={index}
                  total={galleries.length}
                  featured={index === 0}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <SectionHeading eyebrow="TRENDING NOW" title="지금 팬덤에서" />
          <div className="flex flex-wrap gap-2">
            {trendingTags.map((tag) => (
              <TrendingTag key={tag.id} tag={tag} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeading
            eyebrow="HUNTERS"
            title="라이선스 아래의 사람들"
            action={
              <Link href="/hunters" className="inline-flex min-h-11 items-center text-sm font-semibold">
                전체 보기
              </Link>
            }
          />
          <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-2">
            {hunters.map((hunter) => (
              <HunterCard key={hunter.id} hunter={hunter} variant="compact" />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <SectionHeading
            eyebrow="BIRTHDAY CAFE"
            title="게이트 밖은 생일입니다"
            action={
              <Link href="/birthday" className="inline-flex min-h-11 items-center text-sm font-semibold">
                카페 아카이브
              </Link>
            }
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {cafes.map((event) => (
              <BirthdayCafeCard key={event.id} event={event} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="surface relative overflow-hidden p-6 md:p-10">
            <RuneRing className="absolute -right-8 -top-10 h-40 w-40 text-secondary opacity-50" />
            <p className="text-[11px] font-semibold tracking-[0.18em] text-muted">PHOTO PACK</p>
            <h2 className="mt-2 text-3xl font-semibold">포카 한 장, 바인더 한 칸</h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
              프로필부터 50K 한정까지. 팩은 무료로 열리고, 새 카드는 바인더에 남습니다.
            </p>
            <div className="mt-6">
              <ButtonLink href="/pack" glow>
                포카 한 팩 열기
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <SectionHeading
            eyebrow="FANBOARD"
            title="목격, 중계, 덕질"
            action={
              <Link href="/fanboard" className="inline-flex min-h-11 items-center text-sm font-semibold">
                보드 입장
              </Link>
            }
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {posts.map((post) => (
              <FanboardPostCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
