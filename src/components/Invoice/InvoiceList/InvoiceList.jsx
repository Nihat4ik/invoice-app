import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import InvoiceCard from "./InvoiceCard";
import { ReactComponent as EmptyImageSvg } from "../../../images/illustration-empty.svg";
import { StandardTextSizing } from "../../shared/SharedStyles";
import { getInvoicesListAndFilter } from "../../../selectors";
import { motion } from "framer-motion";
import { emptyVariants, listVariants } from "./InvoiceListAnimations";

const InvoiceListComponent = styled(motion.ul)`
  list-style: none;
  margin-top: 6.5rem;
  display: grid;
  gap: 1.6rem;
  @media screen and (max-width: 770px) {
    margin-top: 3.2rem;
  }
`;

const EmptyImageWrapper = styled(motion.div)`
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EmptyImage = styled(EmptyImageSvg)`
  margin-bottom: 6.5rem;
`;

const EmptyTitle = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.2rem;
  margin-bottom: 2.4rem;
`;

const EmptyDescription = styled.p`
  ${StandardTextSizing}
  text-align: center;
  color: ${({ theme }) => theme.colors.noInvoicesColor};
  width: 22rem;
`;

const InvoiceList = () => {
  const filteredInvoices = useSelector(getInvoicesListAndFilter);
  return (
    <InvoiceListComponent
      variants={listVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {filteredInvoices.length > 0 ? (
        <InvoiceCard filteredInvoices={filteredInvoices} />
      ) : (
        <EmptyImageWrapper
          initial="hidden"
          animate="visible"
          variants={emptyVariants}
        >
          <EmptyImage />
          <EmptyTitle>There is nothing here</EmptyTitle>
          <EmptyDescription>
            Create an invoice by clicking the <b>New Invoice</b> button and get
            started
          </EmptyDescription>
        </EmptyImageWrapper>
      )}
    </InvoiceListComponent>
  );
};

export default InvoiceList;
