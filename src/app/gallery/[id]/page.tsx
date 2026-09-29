import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GalleryBrowser } from "@/components/gallery/GalleryBrowser";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { galleries, getGallery } from "@/data/galleries";
import { getItemsByGallery } from "@/data/galleryItems";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return galleries.map((gallery) => ({ id: gallery.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const gallery = getGallery(id);
  if (!gallery) return { title: "Gallery" };
  return { title: gallery.title, description: gallery.description };
}

export default async function GalleryDetailPage({ params }: Props) {
  const { id } = await params;
  const gallery = getGallery(id);
  if (!gallery) notFound();
  const items = getItemsByGallery(gallery.id);

  return (
    <PageShell>
      <Link href="/gallery" className="inline-flex min-h-11 items-center text-sm text-muted">
        ← 50K Gallery
      </Link>
      <div className="mt-4">
        <PageHeader eyebrow={gallery.badge ?? "50K"} title={gallery.title} description={`${gallery.subtitle} · ${gallery.description}`} />
      </div>
      <GalleryBrowser gallery={gallery} items={items} />
    </PageShell>
  );
}
