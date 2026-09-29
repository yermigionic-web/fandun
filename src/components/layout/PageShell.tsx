import { Container } from "@/components/layout/Container";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <div className="pb-16 pt-10 md:pb-20 md:pt-14">{children}</div>
    </Container>
  );
}
