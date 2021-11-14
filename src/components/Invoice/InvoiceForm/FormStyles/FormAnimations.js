export const modalScreenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,

      delay: 0.15,
    },
  },
};
export const modalVariants = {
  hidden: { x: -300 },
  visible: {
    x: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 15,
      stiffness: 150,
    },
  },
  exit: {
    x: -620,
    transition: {
      duration: 0.25,
      type: "linear",
    },
  },
};
