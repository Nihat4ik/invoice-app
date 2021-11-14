import { motion } from "framer-motion";
import styled from "styled-components";

import { StandardTextSizing } from "../../../shared/SharedStyles";

export const Wrapper = styled(motion.div)`
  padding: 4.8rem;
  display: grid;
  grid-template-columns: 19.6rem 20.3rem minmax(0, auto);
  grid-template-areas:
    "iddescription . senderaddress"
    "invoicetime receiveraddress email"
    "items items items";
  align-items: start;
  background-color: ${({ theme }) => theme.colors.detailsWrapper};
  margin-top: 2.4rem;
  border-radius: 8px;
  row-gap: 2.1rem;
  margin-bottom: 12rem;
  transition: 0.3s background, 0.3s color;

  @media screen and (max-width: 770px) {
    grid-template-columns: minmax(0, auto) minmax(0, auto) minmax(0, auto);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: minmax(0, auto) minmax(0, auto);
    grid-template-areas:
      "iddescription senderaddress"
      "invoicetime receiveraddress"
      "email ."
      "items items";
    row-gap: 3.1rem;
    padding: 2.4rem;
  }

  @media screen and (max-width: 320px) {
    grid-template-areas:
      "iddescription ."
      "senderaddress ."
      "invoicetime receiveraddress"
      "email ."
      "items items";
  }
`;

export const Id = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: -0.8px;
`;

export const Hashtag = styled.span`
  color: ${({ theme }) => theme.colors.detailsHashtag};
`;

export const IdDescriptionWrapper = styled.div`
  display: grid;
  gap: 8px;
  grid-area: iddescription;
`;

export const Description = styled.p`
  ${StandardTextSizing};
  color: ${({ theme }) => theme.colors.shipCove};
  transition: 0.3s color;
`;

export const SenderAddress = styled.p`
  font-size: 1.1rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.colors.shipCove};
  text-align: right;
  grid-area: senderaddress;

  @media screen and (max-width: 600px) {
    text-align: left;
  }
`;

export const AddressPart = styled.span`
  display: block;
  transition: 0.3s color;
`;

export const InvoiceTimeWrapper = styled.div`
  display: grid;
  gap: 3.2rem;
  grid-area: invoicetime;
`;

export const ReceiverAddressWrapper = styled.div`
  display: grid;
  gap: 8px;
  grid-area: receiveraddress;
`;

export const ReceiverAddress = styled.p`
  font-size: 1.1rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.colors.shipCove};
`;

export const EmailWrapper = styled.div`
  grid-area: email;
`;
