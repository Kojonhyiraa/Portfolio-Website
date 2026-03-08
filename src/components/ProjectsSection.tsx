import { motion } from "framer-motion";

const projects = [
  {
    name: "Fundgate",
    lang: "Jakarta EE",
    description:
      "A lightweight middleware built with Jakarta EE to manage service availability for an online payment API. Features a complex database schema with efficient controller logic for routing, throttling, and availability checks.",
    highlights: ["Middleware Architecture", "Database Schema Design", "Payment API", "Controller Logic"],
  },
  {
    name: "Apex Bank",
    lang: "Java",
    description:
      "A robust banking application showcasing strict Object-Oriented Programming principles, secure data handling, and scalable database architecture. Implements account management, transaction processing, and comprehensive audit logging.",
    highlights: ["OOP Principles", "Secure Data Handling", "Scalable DB Architecture", "Transaction Processing"],
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.45, ease: "easeOut" },
  }),
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg sm:text-xl font-bold mb-2">
          <span className="text-terminal-comment">// </span>
          <span className="text-terminal-green">Deployed Architecture</span>
          <span className="text-foreground"> / </span>
          <span className="text-terminal-green">Featured Projects</span>
        </h2>
        <p className="text-terminal-comment text-xs mb-8">ls -la ~/projects/</p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="bg-terminal-panel border border-terminal rounded-md overflow-hidden hover:border-terminal-green/30 transition-colors group"
            >
              <div className="flex items-center gap-1 px-4 py-2 bg-background/50 border-b border-terminal">
                <div className="flex items-center gap-2 px-3 py-1 bg-terminal-panel rounded-t text-xs">
                  <span className="text-terminal-green">●</span>
                  <span className="text-foreground/80">{project.name}.java</span>
                </div>
                <span className="text-terminal-comment text-[10px] ml-auto">{project.lang}</span>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-terminal-cyan text-base font-semibold mb-3 group-hover:text-terminal-green transition-colors">
                  {project.name}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[10px] px-2 py-0.5 rounded bg-terminal-green/10 text-terminal-green border border-terminal-green/20"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
