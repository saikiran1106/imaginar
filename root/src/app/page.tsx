// src/app/page.tsx
import HeroSection from "../components/HeroSection/HeroSection";
import ProductSection from "@/components/ProductSection/ProductSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import JoinUs from "../components/JoinUs/JoinUs";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <ProductSection />
      <AboutSection />
      {/* <TeamProfiles /> */}
      <JoinUs />
      <ContactUsSection />
    </>
  );
}
