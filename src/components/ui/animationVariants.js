export const transitionVariants = {
  out: {
    opacity: 0,
    transform: "rotate3d(10, 39, 5, -90deg)",
    filter: "drop-shadow(100vw -100vh 0px var(--primary-opacity))",
  },
  in: {
    opacity: 1,
    transform: "rotate3d(0, 0, 0, 0deg)",
    filter: "drop-shadow(0px 0px 0px transparent)",
  },
};

export const pageTransitions = {
  duration: 1.5,
  ease: "backInOut",
};
