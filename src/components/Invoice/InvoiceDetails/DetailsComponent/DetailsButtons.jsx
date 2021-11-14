import React, { useContext } from "react";
import { AppContext } from "../../../Context/AppProvider";

import {
  ButtonsWrapper,
  PaidButton,
  DeleteButton,
  EditButton,
} from "../DetailsStyles/DashboardStyles";

const DetailsButtons = ({ selectedInvoice, setDeleteModal, setPaidModal }) => {
  const { setFormOpen, setFormType } = useContext(AppContext);
  const onDeleteClick = () => {
    setDeleteModal(true);
  };

  const onEditClick = () => {
    setFormOpen(true);
    setFormType("edit");
  };

  const onPaidClick = () => {
    setPaidModal(true);
  };
  return (
    <ButtonsWrapper>
      {selectedInvoice.status !== "paid" && (
        <EditButton onClick={onEditClick}>Edit</EditButton>
      )}
      <DeleteButton onClick={onDeleteClick}>Delete</DeleteButton>
      {selectedInvoice.status === "pending" && (
        <PaidButton onClick={onPaidClick}>Mark as Paid</PaidButton>
      )}
    </ButtonsWrapper>
  );
};

export default DetailsButtons;
