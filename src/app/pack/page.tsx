import { PageShell } from "@/components/layout/PageShell";
import { PhotocardPack } from "@/components/photocards/PhotocardPack";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = { title: "Photo Pack" };

export default function PackPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="PHOTO PACK" title="포카 한 팩" description="돈을 걸지 않는 수집입니다. 열면 한 장, 새 카드면 바인더에 들어가요." />
      <PhotocardPack />
    </PageShell>
  );
}
