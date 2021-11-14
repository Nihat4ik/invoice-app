import React from "react";
import styled from "styled-components";
import { StandardTextSizing } from "./SharedStyles";

export const Status = styled.div`
  font-weight: 700;
  color: ${({ statusColor }) => statusColor};
  text-transform: capitalize;
  display: flex;
  align-items: center;
  background-color: ${({ backgroundStatusColor }) => backgroundStatusColor};
  width: 10.4rem;
  padding: 1.3rem 0;
  display: inline-flex;
  justify-self: right;
  justify-content: center;
  border-radius: 6px;
  grid-area: status;
  ${StandardTextSizing}
`;

export const StatusIcon = styled.span`
  display: inline-block;
  border-radius: 100%;
  width: 8px;
  height: 8px;
  background-color: ${({ statusColor }) => statusColor};
  margin-right: 8px;
`;

const InvoiceStatus = ({ backgroundStatusColor, statusColor, statusText }) => {
  return (
    <Status
      backgroundStatusColor={backgroundStatusColor}
      statusColor={statusColor}
    >
      <StatusIcon statusColor={statusColor}></StatusIcon>
      {statusText}
    </Status>
  );
};

export default InvoiceStatus;
