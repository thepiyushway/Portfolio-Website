export const ease = [0.25, 0.46, 0.45, 0.94] as const;

export const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};
