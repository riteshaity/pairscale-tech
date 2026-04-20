import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
  animate?: boolean;
  contained?: boolean;
}

const containerVariants = {
  hidden: { opacity: 1, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Section = ({
  children,
  className = "",
  innerClassName = "",
  id,
  animate = true,
  contained = true,
}: SectionProps) => {
  return (
    <motion.section
      id={id}
      className={`relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${className}`}
      variants={animate ? containerVariants : undefined}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={animate ? { once: true, amount: 0.3 } : undefined}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {contained ? (
        <div className={`max-w-6xl mx-auto ${innerClassName}`}>{children}</div>
      ) : (
        children
      )}
    </motion.section>
  );
};

export default Section;
