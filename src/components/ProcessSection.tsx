import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description:
      "We talk. I learn about your problem, your constraints, your goals. No jargon, no BS.",
    color: "terminal-cyan",
  },
  {
    num: "02",
    title: "Diagnosis",
    description:
      "I assess the technical landscape and identify what needs to happen. You get a clear path forward.",
    color: "terminal-amber",
  },
  {
    num: "03",
    title: "Delivery",
    description:
      "My team and I build, iterate, and ship. Transparent updates. No surprises.",
    color: "terminal-green",
  },
  {
    num: "04",
    title: "Support",
    description:
      "Post-launch monitoring, knowledge transfer, and ongoing advisory. I don't just build and disappear.",
    color: "terminal-magenta",
  },
];

const colorVal: Record<string, string> = {
  "terminal-cyan": "hsl(180,100%,50%)",
  "terminal-amber": "hsl(45,100%,55%)",
  "terminal-green": "hsl(120,100%,45%)",
  "terminal-magenta": "hsl(300,80%,60%)",
};

const ProcessSection = () => {
  return (
    <section id="process" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle vertical line bg */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/40 to-transparent hidden md:block" />

      <div className="max-w-4xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl font-bold mb-2"
        >
          <span className="text-terminal-comment">// </span>
          <span className="text-primary">Process</span>
        </motion.h2>
        <p className="text-terminal-comment text-xs mb-2">cat engagement_workflow.md</p>
        <p className="text-foreground/60 text-sm sm:text-base mb-10">
          How engagements work.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/20 hover:shadow-[0_4px_30px_-10px_hsl(180,100%,50%,0.06)] transition-all duration-400 group"
            >
              <div className="flex items-start gap-4">
                <span
                  className="text-3xl sm:text-4xl font-bold font-mono leading-none shrink-0 opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ color: colorVal[step.color] }}
                >
                  {step.num}
                </span>
                <div>
                  <h3
                    className="text-sm font-semibold mb-2 transition-colors"
                    style={{ color: colorVal[step.color] }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-foreground/60 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
