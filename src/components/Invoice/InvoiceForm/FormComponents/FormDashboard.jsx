import React, { useContext } from "react";

import { AppContext } from "../../../Context/AppProvider";
import { useDispatch } from "react-redux";
import { createInvoice } from "../../../../actions";
import {
  DiscardButton,
  DraftButton,
  FormDashboardWrapper,
  SaveButton,
} from "../FormStyles/FormDashboardStyles";

const FormDashboard = ({ formik }) => {
  const { setFormOpen, dropdownValue, formType } = useContext(AppContext);
  const dispatch = useDispatch();

  const onDraftClick = () => {
    dispatch(
      createInvoice({
        values: formik.values,
        paymentTerms: dropdownValue,
        isDraft: true,
      })
    );
    setFormOpen(false);
  };
  return (
    <FormDashboardWrapper mode={formType}>
      <DiscardButton type="button" onClick={() => setFormOpen(false)}>
        {formType === "create" ? "Discard" : "Cancel"}
      </DiscardButton>
      {formType !== "edit" && (
        <DraftButton onClick={onDraftClick} type="button">
          Save as Draft
        </DraftButton>
      )}
      <SaveButton type="submit">
        {formType === "create" ? "Save & Send" : "Save Changes"}
      </SaveButton>
    </FormDashboardWrapper>
  );
};

export default FormDashboard;
