import { motion } from "framer-motion";
import { ArcRings, OrbitDots } from "./SvgDecorations";

const experiences = [
  {
    role: "Software Engineer",
    company: "eTranzact Ghana, Accra Ghana",
    period: "",
    description:
      "Building fintech backend applications and USSD services powering digital payment infrastructure. Designing scalable APIs, integrating payment gateways, and developing high-availability transaction processing systems for enterprise clients.",
    tags: ["Fintech", "USSD", "Backend APIs", "Payment Systems"],
    current: true,
  },
  {
    role: "Software Engineer",
    company: "SuperTech Ghana Limited",
    period: "",
    description:
      "Contributed to enterprise software development lifecycles, building and testing modules for production systems. Collaborated with senior engineers on scalable backend solutions and participated in code reviews and deployment pipelines.",
    tags: ["Java", "SDLC", "Enterprise"],
  },
  {
    role: "IT Support Intern",
    company: "Milife Insurance Ghana",
    period: "",
    description:
      "Provided system troubleshooting and operational support across the IT infrastructure. Diagnosed hardware/software issues and ensured uptime for critical business applications.",
    tags: ["Systems", "Troubleshooting", "Infrastructure"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <ArcRings className="absolute -right-24 top-0 w-[400px] h-[400px] pointer-events-none" />
      <OrbitDots className="absolute -left-20 bottom-0 w-64 h-64 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl font-bold mb-2"
        >
          <span className="text-terminal-comment">// </span>
          <span className="text-terminal-amber">Execution Log</span>
          <span className="text-foreground"> / </span>
          <span className="text-terminal-amber">Professional Experience</span>
        </motion.h2>
        <p className="text-terminal-comment text-xs mb-8">tail -f experience.log</p>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="absolute left-[7px] top-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden sm:block"
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.25, ease: [0.25, 0.1, 0.25, 1] as const }}
                className="relative pl-0 sm:pl-8"
              >
                {/* Animated dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: i * 0.25 + 0.3, type: "spring", stiffness: 300 }}
                  className="hidden sm:block absolute left-0 top-3 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background z-10"
                >
                  <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                </motion.div>

                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-5 sm:p-6 hover:border-primary/30 hover:shadow-[0_4px_30px_-10px_hsl(180,100%,50%,0.08)] transition-all duration-400 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-1">
                    <div className="flex items-start gap-3">
                      {/* Briefcase SVG */}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-terminal-cyan opacity-50 mt-0.5 shrink-0">
                        <rect x="1" y="5" width="14" height="9" rx="1" stroke="currentColor" strokeWidth="1" />
                        <path d="M5 5V3a1 1 0 011-1h4a1 1 0 011 1v2" stroke="currentColor" strokeWidth="1" />
                        <line x1="1" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="1" />
                      </svg>
                      <div>
                        <h3 className="text-terminal-cyan text-sm font-semibold group-hover:text-primary transition-colors">{exp.role}</h3>
                        <p className="text-terminal-green text-xs">@ {exp.company}</p>
                      </div>
                    </div>
                    {(exp as any).current && (
                      <span className="text-terminal-comment text-xs font-mono flex items-center gap-1">
                        <span className="flex items-center gap-1">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal-green" />
                          </span>
                          <span className="text-terminal-green">Current</span>
                        </span>
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-1 rounded-full border border-accent/30 text-accent bg-accent/5 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
