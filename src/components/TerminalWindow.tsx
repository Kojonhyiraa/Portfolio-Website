import { ReactNode } from "react";

const TerminalWindow = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg overflow-hidden shadow-[0_4px_30px_-10px_hsl(180,100%,50%,0.05)] hover:shadow-[0_4px_40px_-10px_hsl(180,100%,50%,0.1)] transition-shadow duration-500">
    {/* Title bar with 3 dots */}
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/50 bg-background/50">
      <span className="w-3 h-3 rounded-full bg-destructive/70" />
      <span className="w-3 h-3 rounded-full bg-terminal-amber/70" />
      <span className="w-3 h-3 rounded-full bg-terminal-green/70" />
      <span className="text-terminal-comment text-xs ml-3 truncate">{title}</span>
    </div>
    <div className="p-5 sm:p-8">{children}</div>
  </div>
);

export default TerminalWindow;
