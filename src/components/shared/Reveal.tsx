"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section";
}

/**
 * Fades content up as it scrolls into view. Use only below the fold:
 * content starts transparent until hydration. Respects prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, y = 28, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = m[as];
  return (
    <LazyMotion features={domAnimation} strict>
      <Tag
        data-reveal=""
        className={className}
        initial={reduce ? false : { opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </Tag>
    </LazyMotion>
  );
}
