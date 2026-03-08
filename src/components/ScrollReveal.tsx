import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up";
}

const ScrollReveal = ({ children, className = "", direction = "up" }: ScrollRevealProps) => {
  const variants = {
    left: { initial: { opacity: 0, x: -80 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 80 }, animate: { opacity: 1, x: 0 } },
    up: { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } },
  };

  const v = variants[direction];

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: false, amount: 0.2, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
