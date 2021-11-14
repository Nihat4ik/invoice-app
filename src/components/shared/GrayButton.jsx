import React, { useContext } from "react";
import Button from "../Button";
import { ThemeContext } from "styled-components";

const GrayButton = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);
  return (
    <Button
      btnRadius="2.4rem"
      textSize="1.2rem"
      bgColor={theme.colors.ghostWhite}
      textColor={theme.colors.grayButtonText}
      btnHover={`background-color:${theme.colors.grayButtonHover};color:${theme.colors.grayButtonHoverColor}`}
      transitionDuration="0.2s"
      fontWeight="700"
      btnPadding="1.7rem 2.4rem"
      focusVisible={`outline:2px dashed ${theme.colors.grayButtonText};`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default GrayButton;
