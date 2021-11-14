import React from "react";
import styled from "styled-components";
import { StandardTextSizing } from "../../shared/SharedStyles";

const InvoiceInfoWrapper = styled.div`
  display: grid;
  gap: 1.2rem;
`;

const Title = styled.h3`
  ${StandardTextSizing};
  color: ${({ theme }) => theme.colors.shipCove};
  transition: 0.3s color;
  font-weight: 500;
`;

const Description = styled.p`
  font-weight: 700;
  font-size: 1.5rem;

  line-height: 2rem;
`;

const InvoiceInfoSet = ({ titleText, descriptionText }) => {
  return (
    <InvoiceInfoWrapper>
      <Title>{titleText}</Title>
      <Description>{descriptionText}</Description>
    </InvoiceInfoWrapper>
  );
};

export default InvoiceInfoSet;
