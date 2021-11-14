import React from "react";
import Button from "../Button";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const RedButton = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);

  return (
    <Button
      bgColor={theme.colors.burntSienna}
      textColor={theme.colors.white}
      textSize="1.2rem"
      btnPadding="1.7rem 2.4rem"
      btnRadius="2.4rem"
      fontWeight="700"
      btnHover={`background-color:${theme.colors.monaLisa}`}
      transitionDuration={"0.2s"}
      focusVisible={`outline:3px dashed ${theme.colors.burntSienna}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default RedButton;
