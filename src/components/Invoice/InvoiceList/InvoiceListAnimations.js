export const emptyVariants = {
  hidden: {
    x: -70,
    y: -90,
    scale: 0.7,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.4,
    },
  },
};

export const listVariants = {
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.4,
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
  transition: {
    type: "spring",
    duration: 0.4,
  },
};

export const cardVariants = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.08,
      type: "easeIn",
    },
  }),
  exit: {
    opacity: 0,

    transition: {
      duration: 0.15,
    },
  },
};
