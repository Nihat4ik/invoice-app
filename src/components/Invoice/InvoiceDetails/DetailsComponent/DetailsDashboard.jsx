import React, { useState } from "react";
import statusColorPicker from "../../../../hooks/statusColorPicker";
import InvoiceStatus from "../../../shared/InvoiceStatus";
import { DetailsWrapper, StatusText } from "../DetailsStyles/DashboardStyles";
import preventScrolling from "../../../../hooks/preventScrolling";
import { detailsHeaderVariant } from "../DetailsStyles/DetailsAnimations";
import DeleteModal from "./DeleteModal";
import PaidModal from "./PaidModal";
import DetailsButtons from "./DetailsButtons";
import { useMediaQuery } from "react-responsive";

const DetailsDashboard = ({ selectedInvoice }) => {
  const [paidModal, setPaidModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const { backgroundColor, textColor } = statusColorPicker(
    selectedInvoice.status
  );
  preventScrolling(deleteModal || paidModal);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width:600px)" });
  console.log(isTabletOrMobile);

  return (
    <React.Fragment>
      <DetailsWrapper
        variants={detailsHeaderVariant}
        exit="exit"
        initial="hidden"
        animate="visible"
      >
        <StatusText>Status</StatusText>
        <InvoiceStatus
          backgroundStatusColor={backgroundColor}
          statusText={selectedInvoice.status}
          statusColor={textColor}
        />
        {!isTabletOrMobile && (
          <DetailsButtons
            selectedInvoice={selectedInvoice}
            setDeleteModal={setDeleteModal}
            setPaidModal={setPaidModal}
          />
        )}

        {deleteModal && (
          <DeleteModal
            selectedInvoice={selectedInvoice}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
          />
        )}

        {paidModal && (
          <PaidModal
            selectedInvoice={selectedInvoice}
            paidModal={paidModal}
            setPaidModal={setPaidModal}
          />
        )}
      </DetailsWrapper>
      {isTabletOrMobile && (
        <DetailsButtons
          selectedInvoice={selectedInvoice}
          setDeleteModal={setDeleteModal}
          setPaidModal={setPaidModal}
        />
      )}
    </React.Fragment>
  );
};

export default DetailsDashboard;
