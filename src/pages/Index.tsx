import { useState, useEffect } from "react";
import TerminalNav from "@/components/TerminalNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedGridBackground from "@/components/AnimatedGridBackground";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [terminalOpened, setTerminalOpened] = useState(false);
  const isMobile = useIsMobile();
  const lockScroll = isMobile && !terminalOpened;

  useEffect(() => {
    if (lockScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lockScroll]);

  return (
    <div className="min-h-screen bg-background scrollbar-thin scroll-smooth relative">
      {/* Global grid lines */}
      <svg className="fixed inset-0 z-0 w-full h-full opacity-[0.07] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="global-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(180,100%,50%)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#global-grid)" />
      </svg>
      <TerminalNav />
      <HeroSection onTerminalOpen={() => setTerminalOpened(true)} />
      <ScrollReveal direction="left"><AboutSection /></ScrollReveal>
      <ScrollReveal direction="right"><SkillsSection /></ScrollReveal>
      <ScrollReveal direction="left"><ExperienceSection /></ScrollReveal>
      <ScrollReveal direction="right"><ProjectsSection /></ScrollReveal>
      <ScrollReveal direction="left"><ProcessSection /></ScrollReveal>
      <CTASection />
      <ScrollReveal direction="right"><FooterSection /></ScrollReveal>
    </div>
  );
};

export default Index;
