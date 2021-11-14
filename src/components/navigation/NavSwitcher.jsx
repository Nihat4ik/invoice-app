import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ReactComponent as Moon } from "../../images/icon-moon.svg";
import { ReactComponent as Sun } from "../../images/icon-sun.svg";
import { setDarkMode } from "../../actions";

const SwitcherBox = styled.button`
  padding: 3.2rem 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.fiord};
  width: 100%;
  cursor: pointer;

  @media screen and (max-width: 880px) {
    padding: 0 3.2rem 0 0;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: none;
    border-right: 1px solid ${({ theme }) => theme.colors.fiord};
  }

  &:focus-visible {
    outline: 3px dashed ${({ theme }) => theme.colors.heliotrope};
  }
`;

const NavSwitcher = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.ui.darkMode);
  return (
    <SwitcherBox onClick={() => dispatch(setDarkMode())}>
      {darkMode ? <Sun /> : <Moon />}
    </SwitcherBox>
  );
};

export default NavSwitcher;
