import { motion } from "framer-motion";
import { RadialBurst, SlashLines } from "./SvgDecorations";

const steps = [
  {
    num: "01",
    title: "Scope",
    description:
      "We get on a call. I understand the problem space, your system constraints, and what success looks like. No slides, just straight talk.",
    color: "terminal-cyan",
  },
  {
    num: "02",
    title: "Architect",
    description:
      "I map the technical landscape — what exists, what's missing, what breaks at scale. You get a blueprint, not a pitch deck.",
    color: "terminal-amber",
  },
  {
    num: "03",
    title: "Ship",
    description:
      "I build, test, and deploy. You get async updates, working demos, and zero hand-waving. Code ships when it's ready.",
    color: "terminal-green",
  },
  {
    num: "04",
    title: "Sustain",
    description:
      "Post-deploy monitoring, runbooks, and knowledge transfer. Systems I build keep running long after the engagement ends.",
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
