export const heroViewport = { once: true } as const;

export const heroImageReveal = {
  initial: { opacity: 0, y: 22, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] as const }
};

export const heroSubscribeReveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.2 }
};

export const socialHoverAnimation = { scale: 1.08, y: -2 };
export const socialTapAnimation = { scale: 0.96 };
