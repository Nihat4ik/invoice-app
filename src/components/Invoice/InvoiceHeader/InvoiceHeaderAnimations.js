export const menuVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    skew: -7,
    y: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    skew: 0,
    y: 0,
    transition: {
      duration: 0.35,
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.7,
    y: -10,
    skew: -4,
    transition: {
      duration: 0.3,
      type: "spring",
    },
  },
};

export const headerVariants = {
  hidden: {
    y: -50,
  },
  visible: {
    y: 0,

    transition: {
      type: "spring",
      damping: 15,
      stiffness: 150,
    },
  },
  exit: {
    y: -30,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
