import React, { forwardRef } from "react";
import { CalendarIconWrapper, CalendarInput } from "../FormStyles/InvoiceInfo";
import { ReactComponent as CalendarIcon } from "../../../../images/icon-calendar.svg";

const CustomDatepicker = forwardRef(({ value, onClick }, ref) => {
  return (
    <React.Fragment>
      <CalendarInput
        type="button"
        onClick={onClick}
        id="createdAt"
        ref={ref}
        name="createdAt"
        value={value}
      >
        {value}
      </CalendarInput>
      <CalendarIconWrapper>
        <CalendarIcon />
      </CalendarIconWrapper>
    </React.Fragment>
  );
});

export default CustomDatepicker;
