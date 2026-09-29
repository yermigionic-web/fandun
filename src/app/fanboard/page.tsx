import { FanboardBoard } from "@/components/fanboard/FanboardBoard";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = { title: "Fanboard" };

export default async function FanboardPage({ searchParams }: { searchParams: Promise<{ tag?: string }> }) {
  const { tag } = await searchParams;
  return (
    <PageShell>
      <PageHeader eyebrow="FANBOARD" title="팬덤은 이미 말하고 있습니다" description="목격, 중계, 생일, 굿즈. 글은 샘플이고, 온도만 진짜처럼." />
      <FanboardBoard initialTag={tag} />
    </PageShell>
  );
}
