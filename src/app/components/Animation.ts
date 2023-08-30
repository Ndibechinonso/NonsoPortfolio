const parentTextAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const appearMotion = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 3.0,
      ease: "easeInOut",
      type: "tween",
    },
  },
};

const leftMotion = {
  initial: {
    x: "10px",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      type: "tween",
    },
  },
};

const rightMotion = {
  initial: {
    x: "-10px",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      type: "tween",
    },
  },
};
const upMotion = {
  initial: {
    y: "110px",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      type: "tween",
    },
  },
};
const upMotionx2 = {
  initial: {
    y: "110px",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      type: "tween",
    },
  },
};

const downMotion = {
  initial: {
    y: "-110px",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      type: "tween",
    },
  },
};

export {
  upMotion,
  rightMotion,
  downMotion,
  leftMotion,
  parentTextAnimation,
  appearMotion,
  upMotionx2,
};
