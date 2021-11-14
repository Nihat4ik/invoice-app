import React from "react";
import styled from "styled-components";
import { StandardTextSizing } from "./SharedStyles";
import { ReactComponent as Left } from "../../images/icon-arrow-left.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const motionLink = motion(Link);
const motionIcon = motion(Left);

export const LinkComponent = styled(motionLink)`
  font-weight: 700;
  ${StandardTextSizing}
  position: relative;
  transition: 0.3s color;
  display: inline-flex;
  margin-bottom: ${({ $marginBottom }) => $marginBottom};
  text-decoration: none;
  max-width: max-content;
  align-items: center;

  &:active,
  &:visited,
  &:link {
    color: ${({ theme }) => theme.colors.vulcan};
  }

  &:focus-visible {
    outline: 3px dashed ${({ theme }) => theme.colors.heliotrope};
    outline-offset: 3px;
  }
`;

const LeftIcon = styled(motionIcon)`
  width: 11px;
  height: 11px;
  left: 0;
  top: 3px;
  margin-right: 2.4rem;
`;

const BackComponent = ({ $marginBottom, ...props }) => {
  return (
    <LinkComponent
      variants={linkVariants}
      $marginBottom={$marginBottom}
      whileHover="hover"
      exit="exit"
      initial="hidden"
      animate="visible"
      {...props}
    >
      <LeftIcon variants={iconVariants} />
      Go back
    </LinkComponent>
  );
};

export default BackComponent;
const iconVariants = {
  hover: {
    x: [0, 5],
    transition: {
      yoyo: Infinity,
      duration: 0.5,
    },
  },
};

const linkVariants = {
  exit: {
    y: -20,
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
