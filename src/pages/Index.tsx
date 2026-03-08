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
    <div className="min-h-screen bg-background scrollbar-thin scroll-smooth relative overflow-x-hidden">
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
