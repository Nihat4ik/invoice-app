export const detailsHeaderVariant = {
  exit: {
    y: -30,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
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
};

export const detailsContentVariants = {
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
    transition: {
      type: "spring",
      duration: 0.4,
    },
  },
};
