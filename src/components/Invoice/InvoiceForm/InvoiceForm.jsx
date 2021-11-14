import React, { useContext, useEffect } from "react";
import { Formik } from "formik";
import { Title } from "./FormStyles/SharedFormStyles";
import { Modal, ModalScreen, FormWrapper } from "./FormStyles/FormModalStyles";
import { initialValues } from "./FormData/initialValues";
import { validationSchema } from "./FormData/validationSchema";
import BillFrom from "./FormComponents/BillFrom";
import BillTo from "./FormComponents/BillTo";
import InvoiceInfo from "./FormComponents/InvoiceInfo";
import InvoiceItems from "./FormComponents/InvoiceItems";
import FormDashboard from "./FormComponents/FormDashboard";
import { AppContext } from "../../Context/AppProvider";
import { useDispatch, useSelector } from "react-redux";
import { createInvoice, editInvoice } from "../../../actions";
import { useMediaQuery } from "react-responsive";
import BackComponent from "../../shared/BackComponent";
import { getInvoiceById } from "../../../selectors";
import { useHistory } from "react-router";
import {
  modalScreenVariants,
  modalVariants,
} from "./FormStyles/FormAnimations";
import ReactDOM from "react-dom";
import ReactFocusLock from "react-focus-lock";

const InvoiceForm = () => {
  const { setFormOpen, formType } = useContext(AppContext);
  const invoiceId = useSelector((state) => state.invoices.selectedId);
  const selectedInvoice = useSelector(getInvoiceById);
  const dispatch = useDispatch();
  const history = useHistory();
  const headerText =
    formType === "create" ? "New Invoice" : `Edit #${invoiceId}`;

  //Accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        setFormOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setFormOpen]);

  const setInitialValues = () => {
    if (formType === "edit") {
      const {
        senderAddress,
        clientAddress,
        clientName,
        clientEmail,
        createdAt,
        description,
        items,
        paymentTerms,
      } = selectedInvoice;
      const populatedValues = {
        senderAddress,
        clientEmail,
        clientName,
        createdAt: new Date(createdAt),
        description,
        clientAddress,
        items,
        paymentTerms,
      };

      return populatedValues;
    }
    return initialValues;
  };
  const isMobile = useMediaQuery({
    query: "(max-width: 650px)",
  });

  const onFormSubmit = (values) => {
    if (formType === "create")
      dispatch(createInvoice({ values, isDraft: false }));
    else {
      dispatch(editInvoice(selectedInvoice, values));
      history.push("/");
    }
    return setFormOpen(false);
  };
  const onModalClick = (e) => {
    if (e.target.classList.contains("modal")) setFormOpen(false);
  };

  const formModal = (
    <ReactFocusLock>
      <ModalScreen
        variants={modalScreenVariants}
        initial="hidden"
        animate="visible"
        className="modal"
        exit="exit"
        onClick={onModalClick}
      >
        <Modal
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="form"
          aria-labelledby={headerText}
          tabIndex={-1}
        >
          {isMobile && (
            <BackComponent
              onClick={() => setFormOpen(false)}
              to=""
              $marginBottom="2.4rem"
            />
          )}
          <Title>{headerText}</Title>
          <Formik
            initialValues={setInitialValues()}
            validationSchema={validationSchema}
            onSubmit={onFormSubmit}
            enableReinitialize={true}
          >
            {(props) => {
              return (
                <React.Fragment>
                  <FormWrapper>
                    <BillFrom formik={props} />
                    <BillTo formik={props} />
                    <InvoiceInfo formik={props} />
                    <InvoiceItems values={props.values} formik={props} />
                    <FormDashboard formik={props} />
                  </FormWrapper>
                </React.Fragment>
              );
            }}
          </Formik>
        </Modal>
      </ModalScreen>
    </ReactFocusLock>
  );

  return ReactDOM.createPortal(formModal, document.getElementById("modal"));
};

export default InvoiceForm;
