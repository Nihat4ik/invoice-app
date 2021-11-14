import React, { useContext } from "react";
import styled from "styled-components";
import InvoiceHeader from "./InvoiceHeader/InvoiceHeader";
import InvoiceList from "./InvoiceList/InvoiceList";
import InvoiceForm from "./InvoiceForm/InvoiceForm";
import preventScrolling from "../../hooks/preventScrolling";
import { AppContext } from "../Context/AppProvider";
import { Switch, Route } from "react-router-dom";
import InvoiceDetails from "./InvoiceDetails/InvoiceDetails";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";

const Section = styled.section`
  display: flex;
  flex-grow: 1;
  margin-top: 7.2rem;
  width: 100%;
  max-width: 73rem;
  margin: 7.2rem auto 0 auto;
  flex-direction: column;

  @media screen and (max-width: 770px) {
    margin-top: 3.2rem;
    padding: 0 2.4rem;
  }
`;

const InvoiceSection = () => {
  const { formOpen } = useContext(AppContext);
  const location = useLocation();
  preventScrolling(formOpen);
  return (
    <Section>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <InvoiceHeader />
            <InvoiceList />
          </Route>

          <Route path="/invoices/:id">
            <InvoiceDetails />
          </Route>
        </Switch>
      </AnimatePresence>
      <AnimatePresence>{formOpen && <InvoiceForm />}</AnimatePresence>
    </Section>
  );
};

export default InvoiceSection;
