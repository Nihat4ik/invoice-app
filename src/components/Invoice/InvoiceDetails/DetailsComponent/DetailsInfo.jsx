import React from "react";
import InvoiceInfoSet from "../InvoiceInfoSet";
import { format } from "date-fns";
import DetailsItems from "./DetailsItems";
import {
  Wrapper,
  IdDescriptionWrapper,
  Description,
  Hashtag,
  Id,
  SenderAddress,
  AddressPart,
  InvoiceTimeWrapper,
  ReceiverAddressWrapper,
  ReceiverAddress,
  EmailWrapper,
} from "../DetailsStyles/InfoStyles";
import { detailsContentVariants } from "../DetailsStyles/DetailsAnimations";

const DetailsInfo = ({ selectedInvoice }) => {
  const senderAddress = selectedInvoice?.senderAddress
    ? selectedInvoice.senderAddress
    : {};
  const clientAddress = selectedInvoice?.clientAddress
    ? selectedInvoice.clientAddress
    : {};
  const createdAt = selectedInvoice?.createdAt
    ? selectedInvoice.createdAt
    : null;
  const paymentDue = selectedInvoice?.paymentDue
    ? selectedInvoice.paymentDue
    : null;

  return (
    <Wrapper
      initial="hidden"
      animate="visible"
      variants={detailsContentVariants}
      exit="exit"
    >
      <IdDescriptionWrapper>
        <Id>
          <Hashtag>#</Hashtag>
          {selectedInvoice.id}
        </Id>
        <Description>{selectedInvoice.description}</Description>
      </IdDescriptionWrapper>
      <SenderAddress>
        <AddressPart>{senderAddress.street}</AddressPart>
        <AddressPart>{senderAddress.city}</AddressPart>
        <AddressPart>{senderAddress.postCode}</AddressPart>
        <AddressPart>{senderAddress.country}</AddressPart>
      </SenderAddress>
      <InvoiceTimeWrapper>
        <InvoiceInfoSet
          titleText="Invoice Date"
          descriptionText={format(new Date(createdAt), "d MMM y")}
        />
        <InvoiceInfoSet
          titleText="Payment Due"
          descriptionText={format(new Date(paymentDue), "d MMM y")}
        />
      </InvoiceTimeWrapper>
      <ReceiverAddressWrapper>
        <InvoiceInfoSet
          titleText="Bill to"
          descriptionText={
            selectedInvoice?.clientName && selectedInvoice.clientName
          }
        />
        <ReceiverAddress>
          <AddressPart>{clientAddress.street}</AddressPart>
          <AddressPart>{clientAddress.city}</AddressPart>
          <AddressPart>{clientAddress.postCode}</AddressPart>
          <AddressPart>{clientAddress.country}</AddressPart>
        </ReceiverAddress>
      </ReceiverAddressWrapper>
      <EmailWrapper>
        <InvoiceInfoSet
          titleText="Sent to"
          descriptionText={
            selectedInvoice?.clientEmail && selectedInvoice.clientEmail
          }
        />
      </EmailWrapper>
      <DetailsItems selectedInvoice={selectedInvoice} />
    </Wrapper>
  );
};

export default DetailsInfo;
