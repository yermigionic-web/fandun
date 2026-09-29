import { RuneCorner } from "@/components/effects/RuneCorner";

export default function Loading() {
  return (
    <div className="grid min-h-[50vh] place-items-center">
      <div className="text-center">
        <RuneCorner className="spin-slow mx-auto h-12 w-12 text-primary" />
        <p className="mt-4 text-sm text-muted">게이트를 여는 중</p>
      </div>
    </div>
  );
}
