"use client";

import { useState } from "react";
import { GateCrackIcon } from "@/components/effects/GateCrackIcon";
import { OrgLogo } from "@/components/hunter/OrgLogo";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { getHunter } from "@/data/hunters";
import { getOrganization } from "@/data/organizations";
import type { FanboardPost } from "@/types";

export function FanboardPostCard({ post }: { post: FanboardPost }) {
  const [liked, setLiked] = useState(false);
  const hunter = post.hunterId ? getHunter(post.hunterId) : undefined;
  const organization = hunter ? getOrganization(hunter.organizationId) : undefined;
  const likes = post.likes + (liked ? 1 : 0);

  return (
    <article className="surface p-4 md:p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1 rounded-full bg-soft px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em]">
          {post.category === "HOT" ? <GateCrackIcon className="h-3.5 w-3.5" /> : null}
          {post.category}
        </span>
        <time className="text-xs text-muted">{post.time}</time>
      </div>
      {organization ? (
        <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#e4ddd4] bg-[#fffcf9] px-2 py-1 text-[11px] font-semibold text-ink">
          <OrgLogo src={organization.logo} size={18} />
          {organization.shortName}
        </p>
      ) : null}
      <h3 className={organization ? "mt-2 text-lg font-semibold leading-snug" : "mt-3 text-lg font-semibold leading-snug"}>{post.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      {hunter ? (
        <MediaFrame src={hunter.images.thumb} alt="" monogram={hunter.monogram} tone={hunter.theme} className="mt-4 aspect-[16/9] w-full rounded-[20px]" />
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-cream px-2.5 py-1 text-xs text-muted">
            #{tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-soft text-sm font-semibold">{post.username.slice(0, 1)}</span>
          <span className="truncate text-sm font-medium">{post.username}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <button
            type="button"
            aria-pressed={liked}
            onClick={() => setLiked((value) => !value)}
            className="inline-flex min-h-11 items-center rounded-full bg-white/80 px-3"
          >
            ♡ {likes.toLocaleString("ko-KR")}
          </button>
          <span className="text-muted">댓글 {post.comments.toLocaleString("ko-KR")}</span>
        </div>
      </div>
    </article>
  );
}
