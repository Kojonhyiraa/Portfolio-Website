import { motion } from "framer-motion";

const projects = [
  {
    name: "Fundgate",
    lang: "Jakarta EE",
    description:
      "A lightweight middleware built with Jakarta EE to manage service availability for an online payment API. Features a complex database schema with efficient controller logic for routing, throttling, and availability checks.",
    highlights: ["Middleware Architecture", "Database Schema Design", "Payment API", "Controller Logic"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-terminal-cyan">
        <rect x="2" y="6" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 12h28" stroke="currentColor" strokeWidth="1" />
        <path d="M10 18h12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M12 22h8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="6" cy="9" r="1" fill="hsl(0,84%,60%)" />
        <circle cx="10" cy="9" r="1" fill="hsl(45,100%,55%)" />
        <circle cx="14" cy="9" r="1" fill="hsl(120,100%,45%)" />
      </svg>
    ),
  },
  {
    name: "Apex Bank",
    lang: "Java",
    description:
      "A robust banking application showcasing strict Object-Oriented Programming principles, secure data handling, and scalable database architecture. Implements account management, transaction processing, and comprehensive audit logging.",
    highlights: ["OOP Principles", "Secure Data Handling", "Scalable DB Architecture", "Transaction Processing"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-terminal-amber">
        <path d="M16 2L4 8v6c0 7.7 5.1 14.9 12 16 6.9-1.1 12-8.3 12-16V8L16 2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 16l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40, rotateX: 4 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Hex grid SVG background */}
      <svg className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] opacity-[0.02]" viewBox="0 0 600 600" fill="none">
        {[0, 1, 2, 3].map(row =>
          [0, 1, 2, 3, 4].map(col => {
            const x = col * 120 + (row % 2 ? 60 : 0) + 30;
            const y = row * 100 + 50;
            return (
              <polygon
                key={`${row}-${col}`}
                points={`${x},${y - 40} ${x + 35},${y - 20} ${x + 35},${y + 20} ${x},${y + 40} ${x - 35},${y + 20} ${x - 35},${y - 20}`}
                stroke="hsl(120,100%,45%)"
                strokeWidth="0.5"
              />
            );
          })
        )}
      </svg>

      <div className="max-w-4xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl font-bold mb-2"
        >
          <span className="text-terminal-comment">// </span>
          <span className="text-terminal-green">Deployed Architecture</span>
          <span className="text-foreground"> / </span>
          <span className="text-terminal-green">Featured Projects</span>
        </motion.h2>
        <p className="text-terminal-comment text-xs mb-8">ls -la ~/projects/</p>

        <div className="grid gap-6 md:grid-cols-2" style={{ perspective: "800px" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2, margin: "-40px" }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-lg overflow-hidden hover:border-terminal-green/30 hover:shadow-[0_8px_40px_-10px_hsl(120,100%,45%,0.1)] transition-all duration-400 group"
            >
              {/* File tab bar */}
              <div className="flex items-center gap-1 px-4 py-2.5 bg-background/50 border-b border-border">
                <div className="flex items-center gap-2 px-3 py-1 bg-card rounded-t text-xs">
                  <span className="text-terminal-green">●</span>
                  <span className="text-foreground/80">{project.name}.java</span>
                </div>
                <span className="text-terminal-comment text-[10px] ml-auto">{project.lang}</span>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                    {project.icon}
                  </div>
                  <h3 className="text-terminal-cyan text-lg font-semibold group-hover:text-terminal-green transition-colors pt-1">
                    {project.name}
                  </h3>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[10px] px-2.5 py-1 rounded-full bg-terminal-green/8 text-terminal-green border border-terminal-green/20 font-medium"
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
