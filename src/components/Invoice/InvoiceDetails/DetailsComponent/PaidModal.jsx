import React from "react";
import PopupModal from "../../../shared/PopupModal";
import { useDispatch } from "react-redux";
import { markPaidInvoice } from "../../../../actions";
import { useHistory } from "react-router";

const PaidModal = ({ selectedInvoice, paidModal, setPaidModal }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onPaidButtonClick = () => {
    dispatch(markPaidInvoice(selectedInvoice.id));
    setPaidModal(false);
    history.push("/");
  };
  return (
    <PopupModal
      setModal={setPaidModal}
      actionType="Status Change"
      modalMessage={`Are you sure you want to mark invoice #${selectedInvoice.id} paid ? This action
  cannot be undone.`}
      buttonText="Mark As Paid"
      modal={paidModal}
      onButtonClick={onPaidButtonClick}
    />
  );
};

export default PaidModal;
