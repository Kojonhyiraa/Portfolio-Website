import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SpaceScene from "./SpaceScene";

const HeroSection = () => {
  const headline = "> Architecting Robust Backend Systems & Scalable Infrastructure";
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-3 sm:px-6 lg:px-8 pt-14 sm:pt-16 relative overflow-hidden">
      {/* 3D Space Background */}
      <div className="absolute inset-0 z-0">
        <SpaceScene />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/40 via-background/70 to-background" />

      {/* Decorative SVG grid lines */}
      <svg className="absolute inset-0 z-[2] w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(180,100%,50%)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Decorative corner SVGs */}
      <svg className="absolute top-16 left-4 z-[2] w-20 h-20 opacity-10" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 40 L40 0 L80 40 L40 80Z" stroke="hsl(180,100%,50%)" strokeWidth="0.5" />
        <circle cx="40" cy="40" r="15" stroke="hsl(180,100%,50%)" strokeWidth="0.5" />
        <circle cx="40" cy="40" r="3" fill="hsl(180,100%,50%)" />
      </svg>
      <svg className="absolute bottom-20 right-4 z-[2] w-24 h-24 opacity-10" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="80" height="80" rx="4" stroke="hsl(45,100%,55%)" strokeWidth="0.5" />
        <line x1="8" y1="48" x2="88" y2="48" stroke="hsl(45,100%,55%)" strokeWidth="0.3" />
        <line x1="48" y1="8" x2="48" y2="88" stroke="hsl(45,100%,55%)" strokeWidth="0.3" />
        <circle cx="48" cy="48" r="20" stroke="hsl(45,100%,55%)" strokeWidth="0.5" strokeDasharray="3 3" />
      </svg>

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-2 text-terminal-comment text-xs sm:text-sm flex items-center gap-2"
        >
          {/* File icon SVG */}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="opacity-60">
            <path d="M2 2a1 1 0 011-1h6l4 4v9a1 1 0 01-1 1H3a1 1 0 01-1-1V2z" stroke="currentColor" strokeWidth="1" />
            <path d="M9 1v4h4" stroke="currentColor" strokeWidth="1" />
          </svg>
          kojo-mante-dankwa/portfolio/hero.java
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-card/80 backdrop-blur-xl border border-border rounded-lg p-3 sm:p-6 md:p-8 mb-4 sm:mb-6 shadow-[0_0_60px_-15px_hsl(180,100%,50%,0.1)]"
        >
          <div className="flex items-center gap-2 mb-6">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 400 }}
              className="w-3 h-3 rounded-full bg-destructive/80"
            />
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 400 }}
              className="w-3 h-3 rounded-full bg-terminal-amber/80"
            />
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 400 }}
              className="w-3 h-3 rounded-full bg-terminal-green/80"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="ml-4 text-terminal-comment text-xs"
            >
              main.java — Backend Portfolio
            </motion.span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
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
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-foreground/70 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-2xl"
          >
            <span className="text-terminal-magenta">Backend Engineer</span> specializing
            in enterprise Java ecosystems, Jakarta EE, and high-availability database
            management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
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
              href="#"
              className="group inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-5 py-2.5 rounded text-sm hover:bg-accent/20 hover:shadow-[0_0_20px_-5px_hsl(45,100%,55%,0.3)] transition-all duration-300"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-60 group-hover:opacity-100 transition-opacity">
                <path d="M6 2v6M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-terminal-comment">$</span> Download: Kojo_CV.pdf
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
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
