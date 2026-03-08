import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const TerminalNav = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between h-12 sm:h-14">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-terminal-cyan">
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
              software.engineer
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-1">
          {[
            { label: "about()", id: "about" },
            { label: "skills()", id: "skills" },
            { label: "experience()", id: "experience" },
            { label: "projects()", id: "projects" },
            { label: "contact()", id: "cta" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative text-xs text-foreground/60 hover:text-terminal-cyan px-3 py-1.5 rounded-md hover:bg-primary/5 transition-all duration-300"
            >
              {item.label}
            </button>
          ))}
          <div className="w-px h-4 bg-border mx-1" />
          <span className="text-[10px] text-terminal-comment px-2 py-1">v1.0.0</span>
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
              {[
                { label: "about()", id: "about" },
                { label: "skills()", id: "skills" },
                { label: "experience()", id: "experience" },
                { label: "projects()", id: "projects" },
                { label: "contact()", id: "cta" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center gap-2 text-xs text-foreground/60 hover:text-terminal-cyan py-2 px-2 rounded hover:bg-primary/5 transition-all w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default TerminalNav;
