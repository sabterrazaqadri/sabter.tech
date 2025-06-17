import { div } from "framer-motion/client";
import HeroSection from "./Components/Herosection";
import AboutMeSection from "./Components/Aboutme";
import SkillsSection from "./Components/Skills";
import ProjectsSection from "./Components/ProjectsSection";
import { Contact } from "lucide-react";
import ContactSection from "./Components/Contact";

export default function Homepage(){
  return(
  <div className="container mx-auto px-4">
  <HeroSection/>
  <AboutMeSection/>   
  <SkillsSection/>
  <ProjectsSection/>
  <ContactSection/>
  </div>
  )
}