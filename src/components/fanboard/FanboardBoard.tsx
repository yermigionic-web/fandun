"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FanboardPostCard } from "@/components/fanboard/FanboardPostCard";
import { fanboardCategories, fanboardPosts } from "@/data/fanboardPosts";
import { cn } from "@/lib/cn";
import type { FanboardCategory } from "@/types";

export function FanboardBoard() {
  const queryTag = useSearchParams().get("tag") ?? "";
  const [category, setCategory] = useState<FanboardCategory | "ALL">("ALL");
  const [tag, setTag] = useState(queryTag);

  useEffect(() => {
    setTag(queryTag);
  }, [queryTag]);
  const posts = useMemo(
    () =>
      fanboardPosts.filter((post) => {
        const categoryOk = category === "ALL" || post.category === category;
        const tagOk =
          !tag || post.tags.some((item) => item.includes(tag)) || post.title.includes(tag) || post.excerpt.includes(tag);
        return categoryOk && tagOk;
      }),
    [category, tag],
  );

  return (
    <div>
      <div className="no-scrollbar mb-4 flex gap-2 overflow-x-auto pb-1">
        <FilterChip active={category === "ALL"} onClick={() => setCategory("ALL")}>
          ALL
        </FilterChip>
        {fanboardCategories.map((item) => (
          <FilterChip key={item} active={category === item} onClick={() => setCategory(item)}>
            {item}
          </FilterChip>
        ))}
      </div>
      {tag ? (
        <div className="mb-4 flex items-center justify-between gap-3 rounded-[20px] bg-white/70 px-4 py-3">
          <p className="text-sm">#{tag}</p>
          <button type="button" className="min-h-11 text-sm font-semibold" onClick={() => setTag("")}>
            태그 지우기
          </button>
        </div>
      ) : null}
      <div className="space-y-4">
        {posts.map((post) => (
          <FanboardPostCard key={post.id} post={post} />
        ))}
      </div>
      {posts.length === 0 ? <p className="surface px-5 py-8 text-center text-sm text-muted">이 태그의 글이 아직 없어요.</p> : null}
    </div>
  );
}

function FilterChip({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex min-h-11 shrink-0 items-center rounded-full px-4 text-sm font-semibold",
        active ? "bg-white text-ink shadow-card ring-1 ring-primary" : "bg-white/60 text-muted",
      )}
    >
      {children}
    </button>
  );
}
