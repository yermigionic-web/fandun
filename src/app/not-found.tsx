import { RuneRing } from "@/components/effects/RuneRing";
import { PageShell } from "@/components/layout/PageShell";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageShell>
      <div className="surface mx-auto max-w-lg px-6 py-14 text-center">
        <RuneRing className="mx-auto h-20 w-20 text-secondary" />
        <h1 className="mt-6 text-2xl font-semibold">게이트 연결이 끊겼어요.</h1>
        <p className="mt-3 text-muted">탐색팀이 출구를 찾는 중입니다.</p>
        <div className="mt-8">
          <ButtonLink href="/">팬던으로 돌아가기</ButtonLink>
        </div>
      </div>
    </PageShell>
  );
}
