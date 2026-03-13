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
import StartupLoader from "@/components/StartupLoader";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [terminalOpened, setTerminalOpened] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const isMobile = useIsMobile();
  const lockScroll = isMobile && !terminalOpened;

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLoader(false), 4600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (lockScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lockScroll]);

  return (
    <>
      {showLoader && <StartupLoader />}
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
    </>
  );
};

export default Index;
