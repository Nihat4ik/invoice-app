import React from "react";
import {
  ErrorStyles,
  FieldSet,
  LargeLegend,
  Input,
} from "../FormStyles/SharedFormStyles";
import { FieldArray } from "formik";
import GrayButton from "../../../shared/GrayButton";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import {
  ItemListWrapper,
  ItemDescription,
  ItemFormWrapper,
  ItemTotalText,
  Trash,
  QuantityInput,
  TrashButton,
} from "../FormStyles/InvoiceItemsStyles";

const ErrorWrapper = styled.div``;

const Error = styled.p`
  ${ErrorStyles}
`;

const InvoiceItems = ({ values, formik }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 650px)",
  });
  const onButtonClick = (push) => {
    push({
      name: "",
      quantity: 1,
      price: 0,
    });
  };

  const renderItems = (items, remove) => {
    return items.map((item, index) => {
      return (
        <ItemFormWrapper key={index}>
          <ItemDescription area="name">
            {index > 0 && !isMobile ? null : "Item Name"}
            <Input
              error={
                formik.touched &&
                formik.touched.items &&
                formik.touched.items[index] &&
                formik.touched.items[index].name &&
                formik.errors &&
                formik.errors.items &&
                formik.errors.items[index] &&
                formik.errors.items[index].name
                  ? formik.errors.items[index].name
                  : null
              }
              name={`items.${index}.name`}
            />
          </ItemDescription>
          <ItemDescription area="qty">
            {index > 0 && !isMobile ? null : "Qty."}
            <QuantityInput
              error={
                formik.touched &&
                formik.touched.items &&
                formik.touched.items[index] &&
                formik.touched.items[index].quantity &&
                formik.errors &&
                formik.errors.items &&
                formik.errors.items[index] &&
                formik.errors.items[index].quantity
                  ? formik.errors.items[index].quantity
                  : null
              }
              name={`items.${index}.quantity`}
              type="number"
            />
          </ItemDescription>
          <ItemDescription area="price">
            {index > 0 && !isMobile ? null : "Price"}
            <Input
              error={
                formik.touched &&
                formik.touched.items &&
                formik.touched.items[index] &&
                formik.touched.items[index].price &&
                formik.errors &&
                formik.errors.items &&
                formik.errors.items[index] &&
                formik.errors.items[index].price
                  ? formik.errors.items[index].price
                  : null
              }
              name={`items.${index}.price`}
              type="number"
            />
          </ItemDescription>
          <ItemDescription area="total">
            {index > 0 && !isMobile ? null : "Total"}
            <ItemTotalText>{item.quantity * item.price}</ItemTotalText>
          </ItemDescription>

          <TrashButton onClick={() => remove(index)}>
            <Trash />
          </TrashButton>
        </ItemFormWrapper>
      );
    });
  };
  return (
    <FieldSet>
      <LargeLegend>Item List</LargeLegend>
      <ItemListWrapper>
        <FieldArray validateOnChange={true} name="items">
          {({ push, remove }) => {
            return (
              values.items && (
                <React.Fragment>
                  {renderItems(values.items, remove)}
                  <GrayButton type="button" onClick={() => onButtonClick(push)}>
                    + Add New Item
                  </GrayButton>
                  <ErrorWrapper>
                    {formik.errors.items instanceof Array &&
                      formik.touched.items && (
                        <Error>All Fields Must Added</Error>
                      )}
                    {typeof formik.errors.items === "string" && (
                      <Error>An Item Must Be Added</Error>
                    )}
                  </ErrorWrapper>
                </React.Fragment>
              )
            );
          }}
        </FieldArray>
      </ItemListWrapper>
    </FieldSet>
  );
};

export default InvoiceItems;
