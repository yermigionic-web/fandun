import { GalleryCard } from "@/components/gallery/GalleryCard";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { galleries } from "@/data/galleries";
import { getItemsByGallery } from "@/data/galleryItems";
import { cn } from "@/lib/cn";

export const metadata = { title: "50K Gallery" };

export default function GalleryIndexPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="50K GALLERY" title="한정 아카이브" description="포스터, SD, 필름, 비하인드, 폴라로이드. 같은 팬던 안에서 결만 조금 다릅니다." />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
        {galleries.map((gallery, index) => (
          <div key={gallery.id} className={cn("lg:col-span-4", index === 0 && "sm:col-span-2 lg:col-span-7", index === 1 && "lg:col-span-5")}>
            <GalleryCard gallery={gallery} count={getItemsByGallery(gallery.id).length} index={index} total={galleries.length} featured={index === 0} />
          </div>
        ))}
      </div>
    </PageShell>
  );
}
