import { CoverStoryCard } from "@/components/editorial/CoverStoryCard";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { coverStories } from "@/data/coverStories";

export const metadata = { title: "Cover Story" };

export default function CoverIndexPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="COVER STORY" title="표지가 된 인터뷰" description="패션지처럼 읽고, 팬덤 앱처럼 머무는 아홉 개의 커버." />
      <div className="grid gap-4 md:grid-cols-2">
        {coverStories.map((story, index) => (
          <CoverStoryCard key={story.id} story={story} index={index} />
        ))}
      </div>
    </PageShell>
  );
}
