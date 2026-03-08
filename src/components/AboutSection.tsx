import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative SVG background */}
      <svg className="absolute right-0 top-0 w-64 h-64 opacity-[0.03]" viewBox="0 0 256 256" fill="none">
        <circle cx="128" cy="128" r="120" stroke="hsl(180,100%,50%)" strokeWidth="0.5" />
        <circle cx="128" cy="128" r="80" stroke="hsl(180,100%,50%)" strokeWidth="0.5" />
        <circle cx="128" cy="128" r="40" stroke="hsl(180,100%,50%)" strokeWidth="0.5" />
        <line x1="8" y1="128" x2="248" y2="128" stroke="hsl(180,100%,50%)" strokeWidth="0.3" />
        <line x1="128" y1="8" x2="128" y2="248" stroke="hsl(180,100%,50%)" strokeWidth="0.3" />
      </svg>

      <div className="max-w-4xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl font-bold mb-8"
        >
          <span className="text-terminal-amber">System</span>
          <span className="text-foreground">.</span>
          <span className="text-terminal-cyan">out</span>
          <span className="text-foreground">.</span>
          <span className="text-terminal-green">println</span>
          <span className="text-foreground">(</span>
          <span className="text-terminal-amber">"About Me"</span>
          <span className="text-foreground">);</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-5 sm:p-8 shadow-[0_4px_30px_-10px_hsl(180,100%,50%,0.05)] hover:shadow-[0_4px_40px_-10px_hsl(180,100%,50%,0.1)] transition-shadow duration-500"
        >
          <div className="flex items-center gap-3 mb-4">
            {/* Code bracket SVG */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-terminal-cyan opacity-50">
              <path d="M7 4L2 10l5 6M13 4l5 6-5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-terminal-line-number text-xs">01&nbsp;&nbsp;/**</span>
          </div>

          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/80 pl-4 border-l-2 border-primary/20">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              A results-driven <span className="text-terminal-cyan font-medium">Backend Software Engineer</span> with a{" "}
              <span className="text-terminal-green font-medium">First Class Honours</span> degree in{" "}
              <span className="text-terminal-amber font-medium">Computer Engineering</span> from Kwame Nkrumah University of
              Science and Technology (KNUST).
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Passionate about designing <span className="text-terminal-cyan font-medium">secure, scalable server-side architectures</span>{" "}
              that power enterprise-grade applications. Proven experience across the full software development lifecycle — from database
              schema design to middleware integration and API security.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              Equipped with strong analytical thinking, a commitment to clean code principles, and effective{" "}
              <span className="text-terminal-magenta font-medium">bilingual communication</span> skills (English &amp; beginner French).
            </motion.p>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-terminal-cyan opacity-50">
              <path d="M7 4L2 10l5 6M13 4l5 6-5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-terminal-line-number text-xs">12&nbsp;&nbsp;*/</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
