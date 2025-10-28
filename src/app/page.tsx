import { div } from "framer-motion/client";
import HeroSection from "./Components/Herosection";
import AboutMeSection from "./Components/Aboutme";
import SkillsSection from "./Components/Skills";
import ProjectsSection from "./Components/ProjectsSection";
import { Contact } from "lucide-react";
import ContactSection from "./Components/Contact";

export default function Homepage(){
  return(
  <div>
  <HeroSection/>

<script type="text/javascript">
	atOptions = {
		'key' : '3c1dc3109d1c1cf94cd1a3204ef488c7',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/3c1dc3109d1c1cf94cd1a3204ef488c7/invoke.js"></script>
    
  <AboutMeSection/>   
  <SkillsSection/>
  <ProjectsSection/>
  <ContactSection/>
  </div>
  )
}
