import React from "react";
import { FieldSet, Legend } from "../FormStyles/SharedFormStyles";
import InputGroupSet from "./InputGroupSet";
import InputSet from "./InputSet";

const BillFrom = ({ formik }) => {
  return (
    <FieldSet>
      <Legend>Bill From</Legend>
      <InputSet
        error={
          formik.touched["senderAddress"] &&
          formik.touched["senderAddress"]["street"] &&
          formik.errors["senderAddress"]
            ? formik.errors["senderAddress"]["street"]
            : null
        }
        labelText="Street Address"
        name="senderAddress.street"
      />
      <InputGroupSet groupSize={3}>
        <InputSet
          error={
            formik.touched["senderAddress"] &&
            formik.touched["senderAddress"]["city"] &&
            formik.errors["senderAddress"]
              ? formik.errors["senderAddress"]["city"]
              : null
          }
          labelText="City"
          name="senderAddress.city"
        />
        <InputSet
          error={
            formik.touched["senderAddress"] &&
            formik.touched["senderAddress"]["postCode"] &&
            formik.errors["senderAddress"]
              ? formik.errors["senderAddress"]["postCode"]
              : null
          }
          labelText="Post Code"
          name="senderAddress.postCode"
        />
        <InputSet
          error={
            formik.touched["senderAddress"] &&
            formik.touched["senderAddress"]["country"] &&
            formik.errors["senderAddress"]
              ? formik.errors["senderAddress"]["country"]
              : null
          }
          labelText="Country"
          name="senderAddress.country"
        />
      </InputGroupSet>
    </FieldSet>
  );
};

export default BillFrom;
