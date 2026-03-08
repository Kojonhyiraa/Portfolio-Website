import TerminalNav from "@/components/TerminalNav";
import BlogSection from "@/components/BlogSection";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background scrollbar-thin scroll-smooth">
      <TerminalNav />
      <div className="pt-16 sm:pt-20">
        <BlogSection />
      </div>
      <ScrollReveal><FooterSection /></ScrollReveal>
    </div>
  );
};

export default Blog;
