import { PageShell } from "@/components/layout/PageShell";
import { BinderGrid } from "@/components/photocards/BinderGrid";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = { title: "My Binder" };

export default function BinderPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="MY BINDER" title="디지털 바인더" description="모은 카드는 페이지에 남고, 아직 없는 칸은 옅은 실루엣으로 기다려요." />
      <BinderGrid />
    </PageShell>
  );
}
