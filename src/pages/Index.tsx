import TerminalNav from "@/components/TerminalNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scrollbar-thin scroll-smooth">
      <TerminalNav />
      <HeroSection />
      <ScrollReveal><AboutSection /></ScrollReveal>
      <ScrollReveal><SkillsSection /></ScrollReveal>
      <ScrollReveal><ExperienceSection /></ScrollReveal>
      <ScrollReveal><ProjectsSection /></ScrollReveal>
      <ScrollReveal><FooterSection /></ScrollReveal>
    </div>
  );
};

export default Index;
