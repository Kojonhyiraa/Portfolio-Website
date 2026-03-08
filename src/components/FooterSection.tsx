import { Github, Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-terminal">
      <div className="max-w-4xl mx-auto">
        <div className="text-terminal-comment text-xs mb-6">// EOF — connect.sh</div>

        <div className="bg-terminal-panel border border-terminal rounded-md p-5 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-terminal-cyan text-sm font-semibold mb-2">
                &gt; Establish Connection
              </h3>
              <p className="text-foreground/60 text-xs leading-relaxed max-w-sm">
                Open to backend engineering roles, collaboration, and community-driven projects.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded border border-terminal hover:border-terminal-cyan/40 hover:text-terminal-cyan text-foreground/60 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded border border-terminal hover:border-terminal-cyan/40 hover:text-terminal-cyan text-foreground/60 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:kojo@example.com"
                className="p-2.5 rounded border border-terminal hover:border-terminal-cyan/40 hover:text-terminal-cyan text-foreground/60 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center space-y-2">
          <p className="text-terminal-comment text-[10px]">
            /* Community: Active contributor to church media tech &amp; live event broadcasting */
          </p>
          <p className="text-terminal-line-number text-[10px]">
            &copy; {new Date().getFullYear()} Kojo Nhyira Mante-Dankwa — Built with precision.
          </p>
          <p className="text-terminal-line-number text-[10px]">
            Process exited with code <span className="text-terminal-green">0</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
