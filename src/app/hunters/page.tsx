import { HunterDirectory } from "@/components/hunter/HunterDirectory";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = { title: "Hunters" };

export default function HuntersPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="HUNTERS" title="아홉 명의 라이선스" description="랭크는 달라도, 팬덤의 자리는 같은 앱 안에 있습니다." />
      <HunterDirectory />
    </PageShell>
  );
}
