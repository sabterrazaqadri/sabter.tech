"use client";

import { div } from "framer-motion/client";
import Script from "next/script";
import HeroSection from "./Components/Herosection";
import AboutMeSection from "./Components/Aboutme";
import SkillsSection from "./Components/Skills";
import ProjectsSection from "./Components/ProjectsSection";
import ContactSection from "./Components/Contact";

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <HeroSection />

      {/* ✅ Adsterra Ad Script */}
      <Script
        id="adsterra-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            atOptions = {
              'key' : '3c1dc3109d1c1cf94cd1a3204ef488c7',
              'format' : 'iframe',
              'height' : 90,
              'width' : 728,
              'params' : {}
            };
          `,
        }}
      />
      <Script
        src="//www.highperformanceformat.com/3c1dc3109d1c1cf94cd1a3204ef488c7/invoke.js"
        strategy="afterInteractive"
        async
      />

      {/* Ad container */}
      <div id="container-3c1dc3109d1c1cf94cd1a3204ef488c7" className="my-6" />

      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
