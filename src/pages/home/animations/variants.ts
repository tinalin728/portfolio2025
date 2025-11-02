// src/animations/variants.ts
import type { Variants } from "framer-motion";

/** Simple fade in */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/** Slide up by 16px with a smooth ease */
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.36, 1] },
  },
};

/** Stagger children inside a motion container */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2, when: "afterChildren", },
  },
};
