export function PullQuote({ quote }: { quote: string }) {
  return (
    <blockquote className="relative my-16 border-l border-primary/70 py-2 pl-6">
      <p className="font-editorial text-3xl font-medium leading-snug text-ink md:text-[2.6rem]">{quote}</p>
    </blockquote>
  );
}
