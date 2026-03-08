import { motion } from "framer-motion";

const skills = {
  backend_frameworks: ["Java", "Jakarta EE", "Quarkus", "Python"],
  data_infrastructure: ["RDBMS Architecture", "Schema Design", "MySQL", "Middleware Integration"],
  security_systems: ["Network Penetration Testing", "Web Penetration Testing", "MATLAB", "Full-Stack Integration"],
};

const skillIcons: Record<string, JSX.Element> = {
  backend_frameworks: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-terminal-cyan">
      <rect x="1" y="3" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1" />
      <path d="M4 7l2 2-2 2M7 11h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
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
      {/* Background decoration */}
      <svg className="absolute left-0 bottom-0 w-48 h-48 opacity-[0.03]" viewBox="0 0 200 200" fill="none">
        <path d="M0 200 L200 0" stroke="hsl(45,100%,55%)" strokeWidth="0.5" />
        <path d="M0 150 L150 0" stroke="hsl(45,100%,55%)" strokeWidth="0.5" />
        <path d="M0 100 L100 0" stroke="hsl(45,100%,55%)" strokeWidth="0.5" />
        <path d="M0 50 L50 0" stroke="hsl(45,100%,55%)" strokeWidth="0.5" />
      </svg>

      <div className="max-w-4xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl font-bold mb-2"
        >
          <span className="text-terminal-comment">// </span>
          <span className="text-terminal-cyan">Skills</span>
          <span className="text-foreground"> & </span>
          <span className="text-terminal-cyan">Stack</span>
        </motion.h2>
        <p className="text-terminal-comment text-xs mb-8">cat tech_stack.json</p>

        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-5 sm:p-8 overflow-x-auto shadow-[0_4px_30px_-10px_hsl(180,100%,50%,0.05)] hover:shadow-[0_4px_40px_-10px_hsl(180,100%,50%,0.1)] transition-shadow duration-500">
          <motion.pre
            className="text-xs sm:text-sm leading-loose"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
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
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
