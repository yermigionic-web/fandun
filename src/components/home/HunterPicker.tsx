"use client";

import { HunterCard } from "@/components/hunter/HunterCard";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hunters } from "@/data/hunters";

export function HunterPicker() {
  return (
    <section id="choose" className="py-14">
      <Container>
        <SectionHeading eyebrow="CHOOSE YOUR HUNTER" title="오늘의 최애를 고르면, 팬던의 색이 바뀝니다" />
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {hunters.map((hunter) => (
            <div key={hunter.id} className="w-[74vw] shrink-0 snap-center sm:w-[46vw] md:w-auto">
              <HunterCard hunter={hunter} variant="picker" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
