import React from "react";
import styled from "styled-components";
import { TemporaryText } from "./InvoiceFilter/InvoiceFilterStyles";
import clampBuilder from "../../../utilities/clampBuilder.ts";
import { useSelector } from "react-redux";
import { getInvoicesListAndFilter } from "../../../selectors";
import { StandardTextSizing } from "../../shared/SharedStyles";

const Wrapper = styled.div``;

const Title = styled.h2`
  font-size: ${clampBuilder(375, 730, 2, 3.2)};
  line-height: 3.6rem;
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 5px;
  transition: 0.3s color;
`;

const Paragraph = styled.p`
  ${StandardTextSizing}
  color: ${({ theme }) => theme.colors.baliHai};
  transition: 0.3s color;
`;

const InvoiceHeaderTitle = () => {
  const appliedFilter = useSelector((state) => state.invoices.appliedFilter);
  const { length } = useSelector(getInvoicesListAndFilter);
  const invoiceTextConstructor = () => {
    const moreThanOne = length > 1;
    if (length !== 0)
      return (
        <React.Fragment>
          <TemporaryText>There {moreThanOne ? "are" : "is"} </TemporaryText>
          {length}{" "}
          <TemporaryText>{appliedFilter ? appliedFilter : ""} </TemporaryText>
          invoice{moreThanOne ? "s" : ""}
        </React.Fragment>
      );
    return "No Invoices";
  };
  return (
    <Wrapper>
      <Title>Invoices</Title>
      <Paragraph>{invoiceTextConstructor()}</Paragraph>
    </Wrapper>
  );
};

export default InvoiceHeaderTitle;
