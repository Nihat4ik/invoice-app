import React, { memo } from "react";
import dateFormatter from "../../../utilities/dateFormatter";
import currencyFormatter from "../../../utilities/currencyFormatter";
import {
  InvoiceCardComponent,
  Id,
  HashTag,
  Date,
  Name,
  Price,
  Time,
  ProceedIcon,
  CardLink,
} from "./InvoiceCardStyles";
import statusColorPicker from "../../../hooks/statusColorPicker.js";
import InvoiceStatus from "../../shared/InvoiceStatus";
import { AnimatePresence } from "framer-motion";
import { cardVariants } from "./InvoiceListAnimations";

const InvoiceCard = ({ filteredInvoices }) => {
  const renderInvoices = filteredInvoices.map((invoice, index) => {
    const { paymentDue, id, clientName, total, status } = invoice;
    const { month, day, year } = dateFormatter(paymentDue, "short", "en-GB");
    const totalAmount = currencyFormatter(total, "GBP", "en-GB");
    const { backgroundColor, textColor } = statusColorPicker(status);

    return (
      <InvoiceCardComponent
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        key={id}
        custom={index}
        exit="exit"
        layout
      >
        <CardLink to={`/invoices/${id}`}>
          <Id>
            <HashTag>#</HashTag>
            {id}
          </Id>
          <Date>
            <Time dateTime={paymentDue}>
              Due {day} {month} {year}
            </Time>
          </Date>
          <Name>{clientName}</Name>
          <Price>{totalAmount}</Price>
          <InvoiceStatus
            statusColor={textColor}
            backgroundStatusColor={backgroundColor}
            statusText={status}
          >
            {status}
          </InvoiceStatus>
          <ProceedIcon />
        </CardLink>
      </InvoiceCardComponent>
    );
  });

  return <AnimatePresence initial={false}>{renderInvoices}</AnimatePresence>;
};

export default memo(InvoiceCard);
