import React from "react";
import Dropdown from "./Dropdown";
import InputGroupSet from "./InputGroupSet";
import InputSet from "./InputSet";
import { FieldSet } from "../FormStyles/SharedFormStyles";
import { Field } from "formik";
import dropdownData from "../../data/dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import CustomDatepicker from "./CustomDatepicker";

const InvoiceInfo = ({ formik }) => {
  const { setFieldValue, values } = formik;

  return (
    <FieldSet>
      <InputGroupSet groupSize={2}>
        <InputSet
          error={
            formik.touched["createdAt"] ? formik.errors["createdAt"] : null
          }
          labelText="Invoice Date"
          name="createdAt"
        >
          <Field name="createdAt">
            {({ field }) => (
              <DatePicker
                {...field}
                onChange={(date) => {
                  setFieldValue("createdAt", date);
                }}
                customInput={<CustomDatepicker />}
                selected={values.createdAt}
                dateFormat="d MMM y"
              />
            )}
          </Field>
        </InputSet>

        <Dropdown
          dropdownData={dropdownData}
          defaultDropdownValue={dropdownData[3].value}
          formik={formik}
        />
      </InputGroupSet>
      <InputSet
        error={
          formik.touched["description"] ? formik.errors["description"] : null
        }
        labelText="Project Description"
        placeholder="e.g. Graphic Design Service"
        name="description"
      />
    </FieldSet>
  );
};

export default InvoiceInfo;
