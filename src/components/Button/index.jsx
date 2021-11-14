import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonComponent = styled(motion.button)`
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  font-family: ${({ theme }) => theme.fonts.spartan};
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $textColor }) => $textColor};
  padding: ${({ $btnPadding }) => $btnPadding};
  font-size: ${({ $textSize }) => $textSize};
  border-radius: ${({ $btnRadius }) => $btnRadius};
  transition: ${({ $transitionDuration }) => $transitionDuration} background,
    ${({ $transitionDuration }) => $transitionDuration} color;
  font-weight: ${({ $fontWeight }) => $fontWeight};
  position: relative;

  &:hover {
    ${({ $btnHover }) => $btnHover}
  }
  &:focus {
    outline: none;
  }
  &:focus-visible {
    ${({ $focusVisible }) => $focusVisible};
    outline-offset: 5px;
  }
`;

const Button = ({
  bgColor,
  textColor,
  btnPadding,
  textSize,
  btnRadius,
  children,
  btnHover,
  transitionDuration,
  fontWeight,
  focusVisible,
  ...props
}) => {
  return (
    <ButtonComponent
      $bgColor={bgColor}
      $textColor={textColor}
      $btnPadding={btnPadding}
      $textSize={textSize}
      $btnRadius={btnRadius}
      $btnHover={btnHover}
      $transitionDuration={transitionDuration}
      $fontWeight={fontWeight}
      $focusVisible={focusVisible}
      {...props}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
