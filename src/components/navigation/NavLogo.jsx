import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../images/logo.svg";
import { AppContext } from "../Context/AppProvider";

const Logo = styled(LogoSvg)`
  position: relative;
  z-index: 100;
  width: 4rem;
  height: 4rem;

  @media screen and (max-width: 880px) {
    width: 3.1rem;
    height: 3rem;
  }
`;

const LogoLink = styled(Link)`
  width: 100%;
  height: 10.3rem;
  background-color: ${({ theme }) => theme.colors.cornBlue};
  border-radius: 0px 2rem 2rem 0px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 880px) {
    width: 8rem;
    height: 8rem;
  }

  @media screen and (max-width: 375px) {
    width: 7.2rem;
    height: 7.2rem;
  }

  &::after {
    content: "";
    position: absolute;
    height: 50%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.heliotrope};
    top: 50%;
    left: 0;
    border-radius: 2rem 0 2rem 0;
  }

  &:focus-visible {
    outline: 3px dashed ${({ theme }) => theme.colors.heliotrope};
  }
`;

const NavLogo = () => {
  const { formOpen, setFormOpen } = useContext(AppContext);
  return (
    <LogoLink to="/" onClick={() => (formOpen ? setFormOpen(false) : null)}>
      <Logo />
    </LogoLink>
  );
};

export default NavLogo;
