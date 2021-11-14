import React from "react";
import { useMediaQuery } from "react-responsive";
import currencyFormatter from "../../../../utilities/currencyFormatter";
import {
  ItemDescriptionsWrapper,
  ItemDescriptionSpan,
  ItemDescriptionTitle,
  ItemTitlesWrapper,
  BoldBlackDescription,
  BoldGrayDescription,
  Wrapper,
  ItemsWrapper,
  TotalWrapper,
  AmountText,
  TotalAmount,
} from "../DetailsStyles/ItemsStyles";

const DetailsItems = ({ selectedInvoice }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 680px)" });

  const itemsRenderer =
    selectedInvoice?.items &&
    selectedInvoice.items.map((el, index) => {
      return (
        <ItemDescriptionsWrapper key={index}>
          <BoldBlackDescription>
            {el.name}
            {isMobile && (
              <ItemDescriptionSpan>
                {el.quantity} x {currencyFormatter(el.price, "GBP", "en-GB")}
              </ItemDescriptionSpan>
            )}
          </BoldBlackDescription>
          {isMobile && (
            <BoldBlackDescription>
              {currencyFormatter(el.total, "GBP", "en-GB")}
            </BoldBlackDescription>
          )}
          {!isMobile && (
            <React.Fragment>
              <BoldGrayDescription>{el.quantity}</BoldGrayDescription>
              <BoldGrayDescription>
                {currencyFormatter(el.price, "GBP", "en-GB")}
              </BoldGrayDescription>
              <BoldBlackDescription>
                {currencyFormatter(el.total, "GBP", "en-GB")}
              </BoldBlackDescription>
            </React.Fragment>
          )}
        </ItemDescriptionsWrapper>
      );
    });
  return (
    <Wrapper>
      <ItemsWrapper>
        {!isMobile && (
          <ItemTitlesWrapper>
            <ItemDescriptionTitle>Item Name </ItemDescriptionTitle>
            <ItemDescriptionTitle>QTY.</ItemDescriptionTitle>
            <ItemDescriptionTitle>Price</ItemDescriptionTitle>
            <ItemDescriptionTitle>Total</ItemDescriptionTitle>
          </ItemTitlesWrapper>
        )}
        {itemsRenderer}
      </ItemsWrapper>
      <TotalWrapper>
        <AmountText>Amount Due</AmountText>
        <TotalAmount>
          {selectedInvoice?.total || selectedInvoice?.total === 0
            ? currencyFormatter(selectedInvoice.total, "GBP", "en-GB")
            : "Loading"}
        </TotalAmount>
      </TotalWrapper>
    </Wrapper>
  );
};

export default DetailsItems;
