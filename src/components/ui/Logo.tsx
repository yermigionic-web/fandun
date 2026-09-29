import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  large = false,
  withHangul = false,
  heading = false,
}: {
  large?: boolean;
  withHangul?: boolean;
  heading?: boolean;
}) {
  const Word = heading ? "h1" : "span";
  return (
    <Link href="/" className="inline-flex flex-col items-start" aria-label="FAN:DUN 홈">
      <Word
        className={cn(
          "inline-flex items-center font-display font-semibold text-ink",
          large ? "text-5xl tracking-[0.12em] md:text-7xl" : "text-[15px] tracking-[0.16em]",
        )}
      >
        FAN<span className="logo-colon">:</span>DUN
      </Word>
      {withHangul ? <span className="mt-2 font-sans text-sm font-medium tracking-[0.42em] text-muted">팬던</span> : null}
    </Link>
  );
}
