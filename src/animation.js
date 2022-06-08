export const alertAnimate = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const clipboardAnimate = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};
