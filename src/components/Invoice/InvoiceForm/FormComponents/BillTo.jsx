import React from "react";
import { FieldSet, Legend } from "../FormStyles/SharedFormStyles";
import InputGroupSet from "./InputGroupSet";
import InputSet from "./InputSet";

const BillTo = ({ formik }) => {
  return (
    <FieldSet>
      <Legend>Bill To</Legend>
      <InputSet
        error={
          formik.touched["clientName"] ? formik.errors["clientName"] : null
        }
        labelText="Client’s Name"
        name="clientName"
      />
      <InputSet
        error={
          formik.touched["clientEmail"] ? formik.errors["clientEmail"] : null
        }
        labelText="Client’s Email"
        placeholder="e.g. email@example.com"
        name="clientEmail"
      />
      <InputSet
        error={
          formik.touched["clientAddress"] &&
          formik.touched["clientAddress"]["street"] &&
          formik.errors["clientAddress"]
            ? formik.errors["clientAddress"]["street"]
            : null
        }
        labelText="Street Address"
        name="clientAddress.street"
      />
      <InputGroupSet groupSize={3}>
        <InputSet
          error={
            formik.touched["clientAddress"] &&
            formik.touched["clientAddress"]["city"] &&
            formik.errors["clientAddress"]
              ? formik.errors["clientAddress"]["city"]
              : null
          }
          labelText="City"
          name="clientAddress.city"
        />
        <InputSet
          error={
            formik.touched["clientAddress"] &&
            formik.touched["clientAddress"]["postCode"] &&
            formik.errors["clientAddress"]
              ? formik.errors["clientAddress"]["postCode"]
              : null
          }
          labelText="Post Code"
          name="clientAddress.postCode"
        />
        <InputSet
          error={
            formik.touched["clientAddress"] &&
            formik.touched["clientAddress"]["country"] &&
            formik.errors["clientAddress"]
              ? formik.errors["clientAddress"]["country"]
              : null
          }
          labelText="Country"
          name="clientAddress.country"
        />
      </InputGroupSet>
    </FieldSet>
  );
};

export default BillTo;
