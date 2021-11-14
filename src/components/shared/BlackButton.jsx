import React, { useContext } from "react";
import Button from "../Button";
import { ThemeContext } from "styled-components";

const BlackButton = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);

  return (
    <Button
      btnRadius="2.4rem"
      textSize="1.2rem"
      bgColor={theme.colors.blackButtonBackground}
      textColor={theme.colors.baliHai}
      btnHover={`background-color:${theme.colors.blackButtonHover}`}
      transitionDuration="0.2s"
      fontWeight="700"
      btnPadding="1.7rem 2.4rem"
      focusVisible={`outline:3px dashed ${theme.colors.baliHai}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default BlackButton;
