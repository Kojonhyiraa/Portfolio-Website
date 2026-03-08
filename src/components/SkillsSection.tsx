import { motion } from "framer-motion";

const skills = {
  "backend_frameworks": ["Java", "Jakarta EE", "Quarkus", "Python"],
  "data_infrastructure": ["RDBMS Architecture", "Schema Design", "MySQL", "Middleware Integration"],
  "security_systems": ["Network Penetration Testing", "Web Penetration Testing", "MATLAB", "Full-Stack Integration"],
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const line = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg sm:text-xl font-bold mb-2">
          <span className="text-terminal-comment">// </span>
          <span className="text-terminal-cyan">Skills</span>
          <span className="text-foreground"> & </span>
          <span className="text-terminal-cyan">Stack</span>
        </h2>
        <p className="text-terminal-comment text-xs mb-8">cat tech_stack.json</p>

        <div className="bg-terminal-panel border border-terminal rounded-md p-5 sm:p-8 overflow-x-auto">
          <motion.pre
            className="text-xs sm:text-sm leading-relaxed"
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
                  <motion.span variants={line} className="block">
                    {"  "}<span className="text-terminal-cyan">"{category}"</span>
                    <span className="text-foreground">: [</span>
                  </motion.span>
                  {items.map((item, i) => (
                    <motion.span variants={line} className="block" key={item}>
                      {"    "}<span className="text-terminal-green">"{item}"</span>
                      {i < items.length - 1 ? <span className="text-foreground">,</span> : null}
                    </motion.span>
                  ))}
                  <motion.span variants={line} className="block">
                    {"  "}<span className="text-foreground">]{ci < Object.keys(skills).length - 1 ? "," : ""}</span>
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
