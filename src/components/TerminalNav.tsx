import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "about()", href: "#about" },
  { label: "skills()", href: "#skills" },
  { label: "experience()", href: "#experience" },
  { label: "projects()", href: "#projects" },
];

const TerminalNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-terminal">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between h-11 sm:h-12">
        <a href="#" className="text-terminal-cyan text-[11px] sm:text-xs font-semibold tracking-wide">
          <span className="font-bold text-foreground">KMD</span><span className="text-terminal-comment">@portfolio:~$</span>
        </a>

        <div className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-foreground/60 hover:text-terminal-cyan transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-foreground/60 hover:text-terminal-cyan transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="sm:hidden bg-background border-b border-terminal px-4 py-3 space-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-xs text-foreground/60 hover:text-terminal-cyan py-1 transition-colors"
            >
              <span className="text-terminal-comment">$ </span>{l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default TerminalNav;
