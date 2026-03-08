import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";
import { SlashLines, Crosshair } from "./SvgDecorations";

const skills = {
  backend_frameworks: ["Java", "Jakarta EE", "Quarkus", "Spring Boot", "C#"],
  frontend: ["React JS", "Framer Motion", "TypeScript", "Tailwind CSS"],
  data_infrastructure: ["RDBMS Architecture", "Kubernetes", "AWS", "MySQL"],
  security_systems: ["Network Penetration Testing", "Web Penetration Testing", "API Security"],
};

const skillIcons: Record<string, JSX.Element> = {
  backend_frameworks: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-terminal-cyan">
      <rect x="1" y="3" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1" />
      <path d="M4 7l2 2-2 2M7 11h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  frontend: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-terminal-magenta">
      <rect x="1" y="2" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="1" />
      <path d="M1 5h14" stroke="currentColor" strokeWidth="0.8" />
      <path d="M5 8l2 2-2 2M9 8h3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  ),
  data_infrastructure: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-terminal-amber">
      <ellipse cx="8" cy="4" rx="6" ry="2" stroke="currentColor" strokeWidth="1" />
      <path d="M2 4v4c0 1.1 2.7 2 6 2s6-.9 6-2V4" stroke="currentColor" strokeWidth="1" />
      <path d="M2 8v4c0 1.1 2.7 2 6 2s6-.9 6-2V8" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  security_systems: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-terminal-green">
      <path d="M8 1L2 4v4c0 3.3 2.6 6.4 6 7 3.4-.6 6-3.7 6-7V4L8 1z" stroke="currentColor" strokeWidth="1" />
      <path d="M6 8l1.5 1.5L10 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const line = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <SlashLines className="absolute -left-10 top-0 w-48 h-full pointer-events-none" />
      <Crosshair className="absolute -right-6 bottom-10 w-24 h-24 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl font-bold mb-2"
        >
          <span className="text-terminal-comment">// </span>
          <span className="text-terminal-cyan">Skills</span>
          <span className="text-foreground"> & </span>
          <span className="text-terminal-cyan">Stack</span>
        </motion.h2>
        <p className="text-terminal-comment text-xs mb-8">cat tech_stack.json</p>

        <TerminalWindow title="tech_stack.json — Skills & Stack">
          <motion.pre
            className="text-xs sm:text-sm leading-loose overflow-x-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2, margin: "-40px" }}
          >
            <code>
              <motion.span variants={line} className="block">
                <span className="text-terminal-comment">{"{"}</span>
              </motion.span>
              {Object.entries(skills).map(([category, items], ci) => (
                <span key={category}>
                  <motion.span variants={line} className="flex items-center gap-2">
                    {"  "}{skillIcons[category]}
                    <span className="text-terminal-cyan">"{category}"</span>
                    <span className="text-foreground">: [</span>
                  </motion.span>
                  {items.map((item, i) => (
                    <motion.span variants={line} className="block" key={item}>
                      {"    "}
                      <span className="text-terminal-green">"{item}"</span>
                      {i < items.length - 1 ? <span className="text-foreground">,</span> : null}
                    </motion.span>
                  ))}
                  <motion.span variants={line} className="block">
                    {"  "}
                    <span className="text-foreground">]{ci < Object.keys(skills).length - 1 ? "," : ""}</span>
                  </motion.span>
                </span>
              ))}
              <motion.span variants={line} className="block">
                <span className="text-terminal-comment">{"}"}</span>
              </motion.span>
            </code>
          </motion.pre>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default SkillsSection;
