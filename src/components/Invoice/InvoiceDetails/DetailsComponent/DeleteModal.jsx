import React from "react";
import PopupModal from "../../../shared/PopupModal";
import { useDispatch } from "react-redux";
import { deleteInvoice } from "../../../../actions";
import { useHistory } from "react-router";

const DeleteModal = ({ selectedInvoice, deleteModal, setDeleteModal }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onDeleteButtonClick = () => {
    dispatch(deleteInvoice(selectedInvoice.id));
    setDeleteModal(false);
    history.push("/");
  };
  return (
    <PopupModal
      setModal={setDeleteModal}
      modalMessage={`Are you sure you want to delete invoice #${selectedInvoice.id} ? This action
cannot be undone.`}
      buttonText="Delete"
      onButtonClick={onDeleteButtonClick}
      actionType="Deletion"
      modal={deleteModal}
    />
  );
};

export default DeleteModal;
