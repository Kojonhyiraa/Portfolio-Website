import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const TerminalNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between h-12 sm:h-14">
        {/* Signature logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-[0_0_15px_-5px_hsl(180,100%,50%,0.3)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-terminal-cyan">
              <path d="M4 7l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="12" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-terminal-green border border-background" />
          </div>
          <div className="hidden sm:block">
            <span className="text-foreground text-xs font-bold tracking-tight block leading-tight">
              KMD
            </span>
            <span className="text-terminal-comment text-[9px] leading-tight">
              backend.engineer
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-1">
          <a
            href="#blog"
            className="relative text-xs text-foreground/60 hover:text-terminal-cyan px-3 py-1.5 rounded-md hover:bg-primary/5 transition-all duration-300 flex items-center gap-1.5"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-50">
              <rect x="1" y="1" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1" />
              <line x1="3" y1="4" x2="9" y2="4" stroke="currentColor" strokeWidth="0.8" />
              <line x1="3" y1="6" x2="7" y2="6" stroke="currentColor" strokeWidth="0.8" />
              <line x1="3" y1="8" x2="8" y2="8" stroke="currentColor" strokeWidth="0.8" />
            </svg>
            blog()
          </a>
          <div className="w-px h-4 bg-border mx-1" />
          <a
            href="#"
            className="text-[10px] text-terminal-comment hover:text-primary/80 px-2 py-1 transition-colors"
          >
            v1.0.0
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-foreground/60 hover:text-terminal-cyan transition-colors p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              <a
                href="#blog"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-xs text-foreground/60 hover:text-terminal-cyan py-2 px-2 rounded hover:bg-primary/5 transition-all"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-50">
                  <rect x="1" y="1" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1" />
                  <line x1="3" y1="4" x2="9" y2="4" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="3" y1="6" x2="7" y2="6" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="3" y1="8" x2="8" y2="8" stroke="currentColor" strokeWidth="0.8" />
                </svg>
                blog()
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default TerminalNav;
