import type { Variants } from "framer-motion";

// Apple-quality motion: soft, no bounce, gentle upward fade.
export const EASE_OUT_SOFT = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_SOFT },
  },
};

// Parent container that staggers its children's reveal.
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const viewportOnce = { once: true, amount: 0.25 } as const;
