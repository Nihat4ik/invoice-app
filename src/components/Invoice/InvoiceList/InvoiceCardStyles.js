import styled from "styled-components";
import { ReactComponent as RightIcon } from "../../../images/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import { StandardTextSizing } from "../../shared/SharedStyles";
import { motion } from "framer-motion";

export const InvoiceCardComponent = styled(motion.li)``;

export const Id = styled.p`
  font-weight: 700;
  grid-area: id;
`;

export const HashTag = styled.span`
  color: ${({ theme }) => theme.colors.invoiceHashtag};
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.colors.baliHai};
  grid-area: date;
`;

export const Time = styled.time``;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.listNameColor};
  grid-area: name;
  @media screen and (max-width: 770px) {
    justify-self: right;
  }
`;

export const Price = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  justify-self: right;
  grid-area: price;
  @media screen and (max-width: 770px) {
    justify-self: left;
  }
`;

export const ProceedIcon = styled(RightIcon)`
  justify-self: right;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

export const CardLink = styled(Link)`
  grid-template-columns: 103px 151px 128px 124px 144px;
  align-items: center;
  grid-template-areas: "id date name price status icon";
  ${StandardTextSizing}
  padding: 1.6rem 2.4rem 1.6rem 3.2rem;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  display: grid;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cardWrapper};
  transition: 0.3s color, 0.3s background, 0.3s border;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  border: 1px solid transparent;

  @media screen and (max-width: 770px) {
    grid-template-columns: unset;
    padding: 2.4rem;
    grid-template-rows: 1.625fr 1fr 1fr;
    align-items: start;
    grid-template-areas:
      "id name"
      "date status"
      "price status";
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.cornBlue};
  }

  &:focus {
    outline: none;
  }
  &:focus-visible {
    border: 1px solid ${({ theme }) => theme.colors.cornBlue};
  }
`;
