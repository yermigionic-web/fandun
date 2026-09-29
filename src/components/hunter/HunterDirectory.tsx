"use client";

import { useState } from "react";
import { HunterCard } from "@/components/hunter/HunterCard";
import { OrgLogo } from "@/components/hunter/OrgLogo";
import { organizations } from "@/data/organizations";
import { hunters } from "@/data/hunters";
import { cn } from "@/lib/cn";
import { organizationIds, type OrganizationId } from "@/types";

export function HunterDirectory() {
  const [organizationId, setOrganizationId] = useState<OrganizationId | "all">("all");
  const visible = organizationId === "all" ? hunters : hunters.filter((hunter) => hunter.organizationId === organizationId);

  return (
    <>
      <div className="no-scrollbar mb-6 flex gap-2 overflow-x-auto pb-1">
        <FilterChip active={organizationId === "all"} onClick={() => setOrganizationId("all")} label="전체">
          전체
        </FilterChip>
        {organizationIds.map((id) => {
          const organization = organizations[id];
          return (
            <FilterChip key={id} active={organizationId === id} onClick={() => setOrganizationId(id)} label={organization.name}>
              <OrgLogo src={organization.logo} size={20} />
              {organization.shortName}
            </FilterChip>
          );
        })}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((hunter) => (
          <HunterCard key={hunter.id} hunter={hunter} variant="profile" />
        ))}
      </div>
    </>
  );
}

function FilterChip({
  active,
  children,
  onClick,
  label,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={cn(
        "inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full px-3.5 text-sm font-semibold",
        active ? "bg-white text-ink shadow-card ring-1 ring-primary" : "bg-white/60 text-muted",
      )}
    >
      {children}
    </button>
  );
}
