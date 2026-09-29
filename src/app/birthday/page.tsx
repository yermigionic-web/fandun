import { BirthdayCafeCard } from "@/components/birthday/BirthdayCafeCard";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { birthdayCafeEvents } from "@/data/birthdayCafeEvents";

export const metadata = { title: "Birthday Cafe" };

export default function BirthdayPage() {
  const events = [...birthdayCafeEvents].sort((a, b) => a.start.localeCompare(b.start));
  return (
    <PageShell>
      <PageHeader
        eyebrow="BIRTHDAY CAFE"
        title="생일은 게이트 밖에 있습니다"
        description="컵홀더, 포토카드, 그리고 가끔은 본인 방문. 팬덤이 차린 자리의 아카이브."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {events.map((event) => (
          <BirthdayCafeCard key={event.id} event={event} />
        ))}
      </div>
    </PageShell>
  );
}
