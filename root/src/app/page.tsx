// src/app/page.tsx
import HeroSection from "../components/HeroSection/HeroSection";
import ProductSection from "@/components/ProductSection/ProductSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import TeamProfiles from "@/components/TeamProfiles/TeamProfiles";
import JoinUs from "../components/JoinUs/JoinUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <AboutSection />
      <TeamProfiles />
      <JoinUs />
    </>
  );
}
