import { useState, useEffect } from "react";

const HeroSection = () => {
  const headline = '> Architecting Robust Backend Systems & Scalable Infrastructure';
  const [displayText, setDisplayText] = useState('');
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
    const cursorTimer = setInterval(() => setShowCursor(prev => !prev), 530);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 23px, hsl(var(--border)) 24px)',
      }} />
      <div className="max-w-4xl w-full relative z-10">
        <div className="mb-2 text-terminal-comment text-xs sm:text-sm">
          // kojo-mante-dankwa/portfolio/hero.java
        </div>
        <div className="bg-terminal-panel border border-terminal rounded-md p-4 sm:p-8 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-3 h-3 rounded-full bg-destructive/80" />
            <span className="w-3 h-3 rounded-full bg-terminal-amber/80" />
            <span className="w-3 h-3 rounded-full bg-terminal-green/80" />
            <span className="ml-4 text-terminal-comment text-xs">main.java — Backend Portfolio</span>
          </div>

          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-terminal-cyan leading-tight mb-6">
            {displayText}
            <span className={`inline-block w-[2px] h-[1em] bg-terminal-cyan ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
          </h1>

          <p className="text-foreground/70 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
            <span className="text-terminal-magenta">Backend Engineer</span> specializing in enterprise Java ecosystems, Jakarta EE, and high-availability database management.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-terminal-cyan/10 border border-terminal-cyan/30 text-terminal-cyan px-5 py-2.5 rounded text-sm hover:bg-terminal-cyan/20 transition-colors"
            >
              <span className="text-terminal-comment">$</span> Execute: View_Projects
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-terminal-amber/10 border border-terminal-amber/30 text-terminal-amber px-5 py-2.5 rounded text-sm hover:bg-terminal-amber/20 transition-colors"
            >
              <span className="text-terminal-comment">$</span> Download: Kojo_CV.pdf
            </a>
          </div>
        </div>

        <div className="text-terminal-line-number text-xs font-mono">
          <span className="text-terminal-comment">// Status:</span>{" "}
          <span className="text-terminal-green">● online</span>{" "}
          <span className="text-terminal-comment">| Ready to collaborate</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
