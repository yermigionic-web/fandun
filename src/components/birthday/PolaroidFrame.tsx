import { cn } from "@/lib/cn";

export function PolaroidFrame({
  caption,
  children,
  className,
}: {
  caption?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure className={cn("rounded-[22px] bg-white p-3 pb-8 shadow-card", className)}>
      <div className="overflow-hidden rounded-[14px] bg-soft">{children}</div>
      {caption ? <figcaption className="mt-3 text-center font-hand text-2xl text-ink">{caption}</figcaption> : null}
    </figure>
  );
}
