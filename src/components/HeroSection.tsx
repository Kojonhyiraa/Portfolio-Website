import { useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { ArcRings, Crosshair, OrbitDots } from "./SvgDecorations";

const vp = { once: false, amount: 0.3 } as const;

type TerminalState = "open" | "minimized" | "closed";
type LaunchLabel = "start" | "restart";

interface HeroProps {
  onTerminalOpen?: () => void;
}

const HeroSection = ({ onTerminalOpen }: HeroProps) => {
  const headline = "> Engineering Software That Moves Industries Forward";
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [terminalState, setTerminalState] = useState<TerminalState>("closed");
  const [launchLabel, setLaunchLabel] = useState<LaunchLabel>("start");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.4 });

  useEffect(() => {
    if (!isInView) {
      setDisplayText("");
      return;
    }
    let i = 0;
    const timer = setInterval(() => {
      if (i <= headline.length) {
        setDisplayText(headline.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 35);
    return () => clearInterval(timer);
  }, [isInView]);

  useEffect(() => {
    const cursorTimer = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-3 sm:px-6 lg:px-8 pt-14 sm:pt-16 relative overflow-hidden">
      {/* SVG decorative elements */}
      <ArcRings className="absolute -top-20 -right-20 w-[500px] h-[500px] pointer-events-none" />
      <OrbitDots className="absolute bottom-10 -left-20 w-[350px] h-[350px] pointer-events-none" />
      <Crosshair className="absolute top-24 left-8 w-28 h-28 pointer-events-none" />
      <Crosshair className="absolute bottom-32 right-12 w-20 h-20 pointer-events-none rotate-45" />

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-2 text-terminal-comment text-xs sm:text-sm flex items-center gap-2"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="opacity-60">
            <path d="M2 2a1 1 0 011-1h6l4 4v9a1 1 0 01-1 1H3a1 1 0 01-1-1V2z" stroke="currentColor" strokeWidth="1" />
            <path d="M9 1v4h4" stroke="currentColor" strokeWidth="1" />
          </svg>
          kojo-mante-dankwa/portfolio/main.java
        </motion.div>

        <AnimatePresence mode="wait">
          {terminalState === "closed" ? (
            /* ── Closed state: sleek restart bar ── */
            <motion.div
              key="closed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-card/60 backdrop-blur-xl border border-border rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 shadow-[0_0_40px_-15px_hsl(180,100%,50%,0.08)]"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-terminal-cyan">
                      <path d="M4 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="10" y1="14" x2="16" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-semibold">Kojo Nhyira Mante-Dankwa</p>
                    <p className="text-terminal-comment text-[10px]">
                      {launchLabel === "start" ? "ready to initialize — click to start" : "process terminated — click to restart"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setTerminalState("open");
                    setLaunchLabel("restart");
                    onTerminalOpen?.();
                  }}
                  className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded text-xs hover:bg-primary/20 transition-all duration-300 hover:shadow-[0_0_15px_-5px_hsl(180,100%,50%,0.3)]"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <polygon points="2,1 9,5 2,9" fill="currentColor" />
                  </svg>
                  ./{launchLabel}.sh
                </button>
              </div>
            </motion.div>
          ) : (
            /* ── Open / Minimized state ── */
            <motion.div
              key="terminal"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              viewport={vp}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-card/80 backdrop-blur-xl border border-border rounded-lg mb-4 sm:mb-6 shadow-[0_0_60px_-15px_hsl(180,100%,50%,0.1)] overflow-hidden"
            >
              {/* Title bar — always visible */}
              <div className="flex items-center gap-2 px-3 sm:px-6 md:px-8 py-3 border-b border-border/50">
                <button
                  onClick={() => setTerminalState("closed")}
                  className="w-3 h-3 rounded-full bg-destructive/80 hover:bg-destructive transition-colors group relative"
                  title="Close"
                >
                  <svg width="7" height="7" viewBox="0 0 7 7" fill="none" className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <path d="M1 1l5 5M6 1L1 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </button>
                <button
                  onClick={() => setTerminalState(terminalState === "minimized" ? "open" : "minimized")}
                  className="w-3 h-3 rounded-full bg-terminal-amber/80 hover:bg-terminal-amber transition-colors group relative"
                  title="Minimize"
                >
                  <svg width="7" height="7" viewBox="0 0 7 7" fill="none" className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <line x1="1" y1="3.5" x2="6" y2="3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </button>
                <button
                  onClick={() => setTerminalState("open")}
                  className="w-3 h-3 rounded-full bg-terminal-green/80 hover:bg-terminal-green transition-colors group relative"
                  title="Maximize"
                >
                  <svg width="7" height="7" viewBox="0 0 7 7" fill="none" className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <rect x="1" y="1" width="5" height="5" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </button>
                <span className="ml-3 text-terminal-comment text-xs truncate">
                  {terminalState === "minimized" ? "main.java — minimized" : "main.java — Backend Portfolio"}
                </span>
              </div>

              {/* Content — collapses on minimize */}
              <AnimatePresence>
                {terminalState === "open" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="p-3 sm:p-6 md:p-8">
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={vp}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4"
                      >
                        Kojo Nhyira<br className="sm:hidden" />{" "}
                        <span className="text-terminal-cyan">Mante-Dankwa</span>
                      </motion.h2>

                      <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-terminal-cyan/80 leading-tight mb-4">
                        {displayText}
                        <span
                          className={`inline-block w-[2px] h-[1em] bg-terminal-cyan ml-1 align-middle ${
                            showCursor ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </h1>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={vp}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="text-foreground/70 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-2xl"
                      >
                        <span className="text-terminal-magenta">Backend Engineer</span> specializing
                        in enterprise Java ecosystems, Jakarta EE, and high-availability database
                        management.
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={vp}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                      >
                        <a
                          href="#projects"
                          className="group inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-5 py-2.5 rounded text-sm hover:bg-primary/20 hover:shadow-[0_0_20px_-5px_hsl(180,100%,50%,0.3)] transition-all duration-300"
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-60 group-hover:opacity-100 transition-opacity">
                            <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-terminal-comment">$</span> Execute: View_Projects
                        </a>
                        <a
                          href="#cta"
                          className="group inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-5 py-2.5 rounded text-sm hover:bg-accent/20 hover:shadow-[0_0_20px_-5px_hsl(45,100%,55%,0.3)] transition-all duration-300"
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-60 group-hover:opacity-100 transition-opacity">
                            <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-terminal-comment">$</span> Schedule: Meeting
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Minimized peek bar */}
              <AnimatePresence>
                {terminalState === "minimized" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="px-3 sm:px-6 py-3 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2 text-xs text-foreground/50">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-terminal-cyan opacity-60">
                        <path d="M3 4l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                      <span>Kojo Mante-Dankwa</span>
                      <span className="text-terminal-comment">·</span>
                      <span className="text-terminal-cyan">Backend Engineer</span>
                    </div>
                    <button
                      onClick={() => setTerminalState("open")}
                      className="text-[10px] text-primary/60 hover:text-primary transition-colors"
                    >
                      expand ↑
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ delay: 1.2 }}
          className="text-terminal-line-number text-xs font-mono flex items-center gap-2"
        >
          <span className="text-terminal-comment">// Status:</span>
          <span className="relative flex items-center gap-1">
            <span className="absolute w-2 h-2 rounded-full bg-terminal-green animate-ping opacity-40" />
            <span className="w-2 h-2 rounded-full bg-terminal-green relative" />
            <span className="text-terminal-green">online</span>
          </span>
          <span className="text-terminal-comment">| Ready to collaborate</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
