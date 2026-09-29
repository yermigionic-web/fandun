import { HeroSection } from "@/components/home/HeroSection";
import { HomeFeed } from "@/components/home/HomeFeed";
import { HunterPicker } from "@/components/home/HunterPicker";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HunterPicker />
      <HomeFeed />
    </>
  );
}
