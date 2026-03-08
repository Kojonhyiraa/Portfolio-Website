const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg sm:text-xl font-bold mb-8">
          <span className="text-terminal-amber">System</span>
          <span className="text-foreground">.</span>
          <span className="text-terminal-cyan">out</span>
          <span className="text-foreground">.</span>
          <span className="text-terminal-green">println</span>
          <span className="text-foreground">(</span>
          <span className="text-terminal-amber">"About Me"</span>
          <span className="text-foreground">);</span>
        </h2>

        <div className="bg-terminal-panel border border-terminal rounded-md p-5 sm:p-8">
          <div className="text-terminal-line-number text-xs mb-4">01&nbsp;&nbsp;/**</div>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/80 pl-4 border-l-2 border-terminal-cyan/20">
            <p>
              A results-driven <span className="text-terminal-cyan">Backend Software Engineer</span> with a{" "}
              <span className="text-terminal-green">First Class Honours</span> degree in{" "}
              <span className="text-terminal-amber">Computer Engineering</span> from Kwame Nkrumah University of Science and Technology (KNUST).
            </p>
            <p>
              Passionate about designing <span className="text-terminal-cyan">secure, scalable server-side architectures</span>{" "}
              that power enterprise-grade applications. Proven experience across the full software development lifecycle — from database schema design to middleware integration and API security.
            </p>
            <p>
              Equipped with strong analytical thinking, a commitment to clean code principles, and effective{" "}
              <span className="text-terminal-magenta">bilingual communication</span> skills (English &amp; beginner French).
            </p>
          </div>
          <div className="text-terminal-line-number text-xs mt-4">12&nbsp;&nbsp;*/</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
