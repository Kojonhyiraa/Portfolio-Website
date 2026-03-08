import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { ArcRings } from "./SvgDecorations";

const socialLinks = [
  { href: "https://github.com/Kojonhyiraa", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/kojo-nhyira", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:kojo.mantedankwa@gmail.com", label: "Email", icon: Mail },
];

const FooterSection = () => {
  return (
    <footer className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-border relative overflow-hidden">
      <ArcRings className="absolute -left-24 -bottom-24 w-[400px] h-[400px] pointer-events-none rotate-180" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-terminal-comment text-xs mb-6 flex items-center gap-2"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-50">
            <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1" />
            <path d="M4 7h6M7 4v6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
          EOF — connect.sh
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-5 sm:p-8 shadow-[0_4px_30px_-10px_hsl(180,100%,50%,0.05)]"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-terminal-cyan text-sm font-semibold mb-2 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-60">
                  <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Establish Connection
              </h3>
              <p className="text-foreground/60 text-xs leading-relaxed max-w-sm">
                Open to backend engineering roles, collaboration, and community-driven projects.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 300 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-2.5 rounded-lg border border-border hover:border-primary/40 hover:text-primary hover:bg-primary/5 text-foreground/60 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center space-y-2"
        >
          <p className="text-terminal-comment text-[10px]">
            /* Community: Active in STEM volunteering and open source community impact projects */
          </p>
          <p className="text-terminal-line-number text-[10px]">
            &copy; {new Date().getFullYear()} Kojo Nhyira Mante-Dankwa
          </p>
          <p className="text-terminal-line-number text-[10px]">
            Process exited with code <span className="text-terminal-green">0</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
