import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";
import { RadialBurst, WaveArcs } from "./SvgDecorations";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <RadialBurst className="absolute -right-16 -top-16 w-72 h-72 pointer-events-none" />
      <WaveArcs className="absolute bottom-0 left-0 w-full h-32 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
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

        <TerminalWindow title="about_me.md — Backend Portfolio">
          <div className="flex items-center gap-3 mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-terminal-cyan opacity-50">
              <path d="M7 4L2 10l5 6M13 4l5 6-5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-terminal-line-number text-xs">01&nbsp;&nbsp;/**</span>
          </div>

          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/80 pl-4 border-l-2 border-primary/20">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
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
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Passionate about designing <span className="text-terminal-cyan font-medium">secure, scalable server-side architectures</span>{" "}
              that power enterprise-grade applications. Proven experience across the full software development lifecycle — from database
              schema design to middleware integration and API security.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
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
        </TerminalWindow>
      </div>
    </section>
  );
};

export default AboutSection;
