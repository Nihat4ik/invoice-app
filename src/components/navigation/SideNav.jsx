import React from "react";
import styled from "styled-components";

import NavLogo from "./NavLogo";
import NavProfile from "./NavProfile";
import NavSwitcher from "./NavSwitcher";

const Container = styled.div`
  max-width: 100%;
  width: 10.5rem;

  @media screen and (max-width: 880px) {
    width: 100%;
  }
  @media screen and (min-width: 880px) {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
  }
`;

const Component = styled.nav`
  @media screen and (max-width: 880px) {
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.navColor};
  border-radius: 0px 2rem 2rem 0px;
  transition: 0.3s background;

  @media screen and (max-width: 880px) {
    height: auto;
    flex-direction: row;
    border-radius: 0;
  }
`;

const NavigationWrapper = styled.div`
  @media screen and (max-width: 880px) {
    display: flex;
    align-items: center;
  }
`;

const SideNav = () => {
  return (
    <Component>
      <Container>
        <Wrapper>
          <NavLogo />
          <NavigationWrapper>
            <NavSwitcher />
            <NavProfile />
          </NavigationWrapper>
        </Wrapper>
      </Container>
    </Component>
  );
};

export default SideNav;
