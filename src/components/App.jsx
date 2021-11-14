import React from "react";
import InvoiceSection from "./Invoice/InvoiceSection";
import SideNav from "./navigation/SideNav";
import GlobalStyle from "../design/GlobalStyles";

import styled from "styled-components";
import AppProvider from "./Context/AppProvider";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../design/theme";
import { useSelector } from "react-redux";

const Main = styled.main`
  display: flex;

  @media screen and (max-width: 880px) {
    flex-direction: column;
  }
`;

const App = () => {
  const darkMode = useSelector((state) => state.ui.darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Main>
        <GlobalStyle />
        <AppProvider>
          <SideNav />
          <InvoiceSection />
        </AppProvider>
      </Main>
    </ThemeProvider>
  );
};

export default App;
