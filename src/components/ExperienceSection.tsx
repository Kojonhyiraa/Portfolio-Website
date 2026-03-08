const experiences = [
  {
    role: "Software Engineering Intern",
    company: "SuperTech Ghana Limited",
    period: "Sep — Nov 2024",
    description:
      "Contributed to enterprise software development lifecycles, building and testing modules for production systems. Collaborated with senior engineers on scalable backend solutions and participated in code reviews and deployment pipelines.",
    tags: ["Java", "SDLC", "Enterprise"],
  },
  {
    role: "IT Support Intern",
    company: "Milife Insurance Ghana",
    period: "Oct — Dec 2023",
    description:
      "Provided system troubleshooting and operational support across the IT infrastructure. Diagnosed hardware/software issues and ensured uptime for critical business applications.",
    tags: ["Systems", "Troubleshooting", "Infrastructure"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg sm:text-xl font-bold mb-2">
          <span className="text-terminal-comment">// </span>
          <span className="text-terminal-amber">Execution Log</span>
          <span className="text-foreground"> / </span>
          <span className="text-terminal-amber">Professional Experience</span>
        </h2>
        <p className="text-terminal-comment text-xs mb-8">tail -f experience.log</p>

        <div className="relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-terminal-cyan/20 hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-0 sm:pl-8">
                <div className="hidden sm:block absolute left-0 top-3 w-[15px] h-[15px] rounded-full border-2 border-terminal-cyan bg-background z-10" />

                <div className="bg-terminal-panel border border-terminal rounded-md p-5 sm:p-6 hover:border-terminal-cyan/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-1">
                    <div>
                      <h3 className="text-terminal-cyan text-sm font-semibold">{exp.role}</h3>
                      <p className="text-terminal-green text-xs">@ {exp.company}</p>
                    </div>
                    <span className="text-terminal-comment text-xs font-mono">{exp.period}</span>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded border border-terminal-amber/30 text-terminal-amber"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
