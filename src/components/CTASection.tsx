import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, ArrowRight, Zap, X } from "lucide-react";
import Cal from "@calcom/embed-react";

const CTASection = () => {
  const [showCal, setShowCal] = useState(false);

  return (
    <>
      <section id="cta" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[61%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[520px] rounded-[58%_42%_62%_38%/64%_44%_56%_36%] bg-terminal-cyan/20 blur-[115px]" />
          <div className="absolute top-[64%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[470px] rounded-[45%_55%_38%_62%/60%_36%_64%_40%] bg-primary/14 blur-[95px]" />
          <div className="absolute top-[67%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[190px] h-[280px] rounded-[48%_52%_40%_60%/66%_34%_62%_38%] bg-terminal-cyan/16 blur-[60px]" />
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
            className="flex flex-col items-center gap-4"
          >
            <button
              onClick={() => setShowCal(true)}
              className="group inline-flex items-center gap-3 bg-primary/10 border border-primary/30 text-primary px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary/20 hover:shadow-[0_0_30px_-5px_hsl(180,100%,50%,0.3)] transition-all duration-300"
            >
              <CalendarCheck size={18} />
              Book Me — Schedule Meeting
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
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

      {/* Fullscreen Cal overlay */}
      <AnimatePresence>
        {showCal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
            onClick={() => setShowCal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-card border border-border/50 rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Terminal-style header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/30 bg-muted/30">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-terminal-comment font-mono">scheduler.exec()</span>
                </div>
                <button
                  onClick={() => setShowCal(false)}
                  className="text-foreground/50 hover:text-foreground transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Cal widget */}
              <div className="h-[500px]">
                <Cal
                  calLink="kojo-nhyira-mante-dankwa-fzksxp/15min"
                  style={{ width: "100%", height: "100%", overflow: "auto" }}
                  config={{
                    layout: "month_view",
                    theme: "dark",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CTASection;
