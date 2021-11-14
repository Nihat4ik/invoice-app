import React, { useEffect } from "react";
import DetailsDashboard from "./DetailsComponent/DetailsDashboard";
import DetailsInfo from "./DetailsComponent/DetailsInfo";
import { useSelector, useDispatch } from "react-redux";
import { getInvoiceById } from "../../../selectors";
import { useParams } from "react-router";
import { selectInvoice } from "../../../actions";
import BackComponent from "../../shared/BackComponent";

const InvoiceDetails = () => {
  const { id } = useParams();

  const selectedInvoice = useSelector(getInvoiceById);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectInvoice(id));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <BackComponent $marginBottom="3.2rem" to="/" />
      <DetailsDashboard
        selectedInvoice={selectedInvoice ? selectedInvoice : {}}
      />
      <DetailsInfo selectedInvoice={selectedInvoice ? selectedInvoice : {}} />
    </React.Fragment>
  );
};

export default InvoiceDetails;
