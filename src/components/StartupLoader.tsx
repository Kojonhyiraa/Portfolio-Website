import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const StartupLoader = () => {
  const name = "Kojo Nhyira Mante-Dankwa";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const atEnd = text === name;
    const atStart = text.length === 0;

    const delay = atEnd && !isDeleting ? 1200 : atStart && isDeleting ? 300 : isDeleting ? 70 : 95;

    const timer = window.setTimeout(() => {
      if (!isDeleting && !atEnd) {
        setText(name.slice(0, text.length + 1));
        return;
      }

      if (!isDeleting && atEnd) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !atStart) {
        setText(name.slice(0, text.length - 1));
        return;
      }

      if (isDeleting && atStart) {
        setIsDeleting(false);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, name, text]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center gap-4 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.35 }}
          className="text-foreground text-xl sm:text-2xl font-semibold font-mono tracking-tight"
        >
          {text}
          <span className="text-terminal-cyan animate-pulse">|</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.35 }}
          className="text-terminal-cyan/80 text-xs"
        >
          Software Engineer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-2 flex items-center gap-2 text-terminal-comment text-[11px]"
        >
          <span className="w-2 h-2 rounded-full bg-terminal-cyan animate-pulse" />
          Initializing portfolio...
        </motion.div>
      </div>
    </div>
  );
};

export default StartupLoader;