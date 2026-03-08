const skills = {
  "backend_frameworks": ["Java", "Jakarta EE", "Quarkus", "Python"],
  "data_infrastructure": ["RDBMS Architecture", "Schema Design", "MySQL", "Middleware Integration"],
  "security_systems": ["Network Penetration Testing", "Web Penetration Testing", "MATLAB", "Full-Stack Integration"],
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
          <pre className="text-xs sm:text-sm leading-relaxed">
            <code>
              <span className="text-terminal-comment">{"{"}</span>{"\n"}
              {Object.entries(skills).map(([category, items], ci) => (
                <span key={category}>
                  {"  "}<span className="text-terminal-cyan">"{category}"</span>
                  <span className="text-foreground">: [</span>{"\n"}
                  {items.map((item, i) => (
                    <span key={item}>
                      {"    "}<span className="text-terminal-green">"{item}"</span>
                      {i < items.length - 1 ? <span className="text-foreground">,</span> : null}{"\n"}
                    </span>
                  ))}
                  {"  "}<span className="text-foreground">]{ci < Object.keys(skills).length - 1 ? "," : ""}</span>{"\n"}
                </span>
              ))}
              <span className="text-terminal-comment">{"}"}</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
