import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  solid: "bg-primary text-ink shadow-[0_8px_24px_color-mix(in_srgb,var(--theme-glow)_45%,transparent)]",
  soft: "bg-soft text-ink",
  ghost: "border border-line bg-white/80 text-ink",
} as const;

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

export function Button({
  variant = "solid",
  className,
  type = "button",
  glow = false,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  glow?: boolean;
}) {
  return <button type={type} className={cn(base, variants[variant], glow && "magic-btn", className)} {...props} />;
}

export function ButtonLink({
  href,
  variant = "solid",
  className,
  glow = false,
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  className?: string;
  glow?: boolean;
  children: React.ReactNode;
}) {
  const useDocumentNavigation = href === "/pack" || href === "/binder";
  return (
    <Link
      href={href}
      prefetch={useDocumentNavigation ? false : undefined}
      onClick={useDocumentNavigation ? (event) => {
        // GitHub Pages can serve stale/missing Next.js RSC .txt payloads during client navigation.
        // Full document navigation avoids relying on those payloads for collection pages.
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        window.location.assign(event.currentTarget.href);
      } : undefined}
      className={cn(base, variants[variant], glow && "magic-btn", className)}
    >
      {children}
    </Link>
  );
}
