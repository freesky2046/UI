import Image from "next/image";
import HomeNavigationMenu from "./HomeNavigation";
import HeroSection from "./Hero";
import FeatureSection from "./Feature";
import HowToUseSection from "./HowToUse";
import FaqSection from "./FaqSection";
import CtaSection from "./CTA";
import Footer from "./Footer";

export default function Home() {
  return (
    <div >
      <HomeNavigationMenu />
      <HeroSection />
      <FeatureSection />
      <HowToUseSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
