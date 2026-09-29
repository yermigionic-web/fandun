import { Container } from "@/components/layout/Container";

export function SiteFooter() {
  return (
    <footer className="pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-8">
      <Container>
        <div className="surface flex flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-sm tracking-[0.16em]">FAN:DUN · 팬던</p>
          <p className="text-sm text-muted">헌터 팬덤 포털</p>
        </div>
      </Container>
    </footer>
  );
}
