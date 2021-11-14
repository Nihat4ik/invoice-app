import React, { useState, useRef, useEffect } from "react";
import detectOutsideClick from "../../../../hooks/detectOutsideClick";
import { Arrow } from "../../InvoiceHeader/InvoiceFilter/InvoiceFilterStyles";
import {
  DropdownItem,
  Label,
  DropdownBoxWrapper,
  DropdownText,
  DropdownList,
  InputWrapper,
  DropdownListButton,
} from "../FormStyles/DropdownStyles";
import { Field } from "formik";

const Dropdown = ({ dropdownData, defaultDropdownValue, formik }) => {
  const [dropdown, setDropdown] = useState(false);
  const modalRef = useRef();
  const clickedOutside = detectOutsideClick(modalRef, dropdown);
  const { setFieldValue } = formik;
  useEffect(() => {
    if (clickedOutside) setDropdown(false);
  }, [clickedOutside]);
  const onDropdownClick = () => {
    setDropdown(!dropdown);
  };

  const onDropdownItemClick = (value) => {
    setFieldValue("paymentTerms", value);
    setDropdown(false);
  };

  const renderDropdown = dropdownData.map((el) => {
    return (
      <DropdownItem
        role="option"
        onClick={() => onDropdownItemClick(el.value)}
        key={el.id}
      >
        <DropdownListButton role="button">{el.text}</DropdownListButton>
      </DropdownItem>
    );
  });

  return (
    <Field name="paymentTerms">
      {(field) => {
        return (
          <InputWrapper {...field}>
            <Label>Payment Terms</Label>

            <DropdownBoxWrapper
              type="button"
              role="listbox"
              aria-expanded={dropdown}
              aria-label={`${formik.values.paymentTerms} days`}
              onClick={onDropdownClick}
            >
              <DropdownText>Net {defaultDropdownValue} Days</DropdownText>
              <Arrow $menu={dropdown} />
            </DropdownBoxWrapper>

            {dropdown && (
              <DropdownList ref={modalRef}>{renderDropdown}</DropdownList>
            )}
          </InputWrapper>
        );
      }}
    </Field>
  );
};

export default Dropdown;
