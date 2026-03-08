import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Cal from "@calcom/embed-react";

const CTASection = () => {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background pulse */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-terminal-amber text-xs px-3 py-1 border border-accent/20 rounded-full bg-accent/5 mb-6">
            <Zap size={12} />
            Ready to execute?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight"
        >
          Ready to stop overthinking
          <br />
          <span className="text-terminal-cyan">and start building?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-foreground/60 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed"
        >
          Whether you need a robust backend, scalable database architecture, or someone who actually understands 
          enterprise Java — let's talk. No fluff, just solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full rounded-lg overflow-hidden border border-border/30"
        >
          <Cal
            calLink="kojo-nhyira-mante-dankwa-fzksxp/15min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{
              layout: "month_view",
              theme: "dark",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-6 text-[10px] text-terminal-comment"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-terminal-green" />
            Available for projects
          </span>
          <span className="w-px h-3 bg-border" />
          <span>Response time: &lt; 24hrs</span>
          <span className="w-px h-3 bg-border" />
          <span>Remote-friendly</span>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
