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
    <div className="min-h-screen bg-background scrollbar-thin scroll-smooth">
      <TerminalNav />
      <HeroSection onTerminalOpen={() => setTerminalOpened(true)} />
      <ScrollReveal><AboutSection /></ScrollReveal>
      <ScrollReveal><SkillsSection /></ScrollReveal>
      <ScrollReveal><ExperienceSection /></ScrollReveal>
      <ScrollReveal><ProjectsSection /></ScrollReveal>
      <ScrollReveal><SystemDesignSection /></ScrollReveal>
      <CTASection />
      <ScrollReveal><FooterSection /></ScrollReveal>
    </div>
  );
};

export default Index;
