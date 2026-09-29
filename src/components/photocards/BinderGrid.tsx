"use client";

import { useEffect, useMemo, useState } from "react";
import { PhotocardFace } from "@/components/photocards/PhotocardFace";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { collectionOrder, photocards, rarityOrder } from "@/data/photocards";
import { hunters } from "@/data/hunters";
import { cn } from "@/lib/cn";
import { useBinderIds } from "@/lib/useBinder";
import { useMounted } from "@/lib/useMounted";
import type { CardCollection, HunterId, Rarity } from "@/types";

export function BinderGrid() {
  const ids = useBinderIds();
  const mounted = useMounted();
  const [hunterId, setHunterId] = useState<HunterId | "all">("all");
  const [rarity, setRarity] = useState<Rarity | "all">("all");
  const [collection, setCollection] = useState<CardCollection | "all">("all");
  const [ownedOnly, setOwnedOnly] = useState(false);
  const [page, setPage] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [flipped, setFlipped] = useState(false);

  const owned = useMemo(() => new Set(ids), [ids]);
  const filtered = useMemo(
    () =>
      photocards.filter((card) => {
        const hunterOk = hunterId === "all" || card.hunterId === hunterId;
        const rarityOk = rarity === "all" || card.rarity === rarity;
        const collectionOk = collection === "all" || card.collection === collection;
        const ownedOk = !ownedOnly || owned.has(card.id);
        return hunterOk && rarityOk && collectionOk && ownedOk;
      }),
    [collection, hunterId, owned, ownedOnly, rarity],
  );

  useEffect(() => {
    setPage(0);
  }, [hunterId, rarity, collection, ownedOnly]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / 9));
  const safePage = Math.min(page, pageCount - 1);
  const slice = filtered.slice(safePage * 9, safePage * 9 + 9);
  const active = photocards.find((card) => card.id === activeId);
  const activeHunter = active ? hunters.find((hunter) => hunter.id === active.hunterId) : undefined;
  const activeOwned = active ? owned.has(active.id) : false;

  return (
    <div>
      <div className="surface mb-6 flex flex-wrap items-end justify-between gap-4 p-5">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-muted">COLLECTED</p>
          <p className="mt-1 text-3xl font-semibold">
            {mounted ? ids.length : "—"}
            <span className="text-lg font-medium text-muted"> / {photocards.length}</span>
          </p>
        </div>
        <ButtonLink href="/pack" variant="solid" glow>
          포카 한 팩 열기
        </ButtonLink>
      </div>
      {mounted && ids.length === 0 ? (
        <p className="mb-5 text-sm leading-relaxed text-muted">아직 비어 있는 페이지가 많아요. 포토팩에서 첫 장을 열어 보세요.</p>
      ) : null}
      <div className="space-y-3">
        <ChipRow>
          <Chip active={hunterId === "all"} onClick={() => setHunterId("all")}>
            모든 헌터
          </Chip>
          {hunters.map((hunter) => (
            <Chip key={hunter.id} active={hunterId === hunter.id} onClick={() => setHunterId(hunter.id)}>
              {hunter.nameKo}
            </Chip>
          ))}
        </ChipRow>
        <ChipRow>
          <Chip active={rarity === "all"} onClick={() => setRarity("all")}>
            모든 등급
          </Chip>
          {rarityOrder.map((item) => (
            <Chip key={item} active={rarity === item} onClick={() => setRarity(item)}>
              {item}
            </Chip>
          ))}
        </ChipRow>
        <ChipRow>
          <Chip active={collection === "all"} onClick={() => setCollection("all")}>
            모든 컬렉션
          </Chip>
          {collectionOrder.map((item) => (
            <Chip key={item} active={collection === item} onClick={() => setCollection(item)}>
              {item}
            </Chip>
          ))}
        </ChipRow>
      </div>
      <button
        type="button"
        aria-pressed={ownedOnly}
        onClick={() => setOwnedOnly((value) => !value)}
        className={cn("mt-4 min-h-11 rounded-full px-4 text-sm font-semibold", ownedOnly ? "bg-primary" : "bg-white/80")}
      >
        가진 카드만
      </button>
      {slice.length === 0 ? (
        <p className="surface mt-6 px-5 py-10 text-center text-sm text-muted">이 조건의 카드가 없어요.</p>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {slice.map((card) => {
            const hunter = hunters.find((entry) => entry.id === card.hunterId);
            if (!hunter) return null;
            const locked = !owned.has(card.id);
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => {
                  setFlipped(false);
                  setActiveId(card.id);
                }}
                className="text-left"
                aria-label={locked ? `${card.title} 미수집` : card.title}
              >
                <PhotocardFace card={card} hunter={hunter} locked={locked || !mounted} />
              </button>
            );
          })}
        </div>
      )}
      <div className="mt-6 flex items-center justify-between">
        <Button variant="ghost" onClick={() => setPage((value) => Math.max(0, value - 1))} disabled={safePage === 0}>
          이전 페이지
        </Button>
        <p className="text-sm text-muted">
          {safePage + 1} / {pageCount}
        </p>
        <Button variant="ghost" onClick={() => setPage((value) => Math.min(pageCount - 1, value + 1))} disabled={safePage >= pageCount - 1}>
          다음 페이지
        </Button>
      </div>
      <Modal open={Boolean(active && activeHunter)} title={active?.title ?? "카드"} onClose={() => setActiveId(null)}>
        {active && activeHunter ? (
          <div className="mx-auto w-[min(100%,280px)]">
            <PhotocardFace card={active} hunter={activeHunter} locked={!activeOwned} flipped={flipped} />
            <div className="mt-4 space-y-2 text-center">
              <p className="font-semibold">{activeOwned ? active.title : "아직 이 슬롯의 카드를 만나지 못했어요."}</p>
              <p className="text-sm text-muted">{activeOwned ? active.flavor : "포토팩에서 만날 수 있어요."}</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                <Button variant="soft" onClick={() => setFlipped((value) => !value)}>
                  {flipped ? "앞면" : "뒷면 보기"}
                </Button>
                {!activeOwned ? (
                  <ButtonLink href="/pack" variant="solid">
                    팩 열기
                  </ButtonLink>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}

function ChipRow({ children }: { children: React.ReactNode }) {
  return <div className="no-scrollbar flex gap-2 overflow-x-auto">{children}</div>;
}

function Chip({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex min-h-11 shrink-0 items-center rounded-full px-3.5 text-sm font-semibold",
        active ? "bg-white text-ink shadow-card ring-1 ring-primary" : "bg-white/60 text-muted",
      )}
    >
      {children}
    </button>
  );
}
