import styled from "styled-components";
import RedButton from "../../../shared/RedButton";
import { StandardTextSizing } from "../../../shared/SharedStyles";
import VioletButton from "../../../shared/VioletButton";
import GrayButton from "../../../shared/GrayButton";
import { motion } from "framer-motion";

export const DetailsWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.detailsWrapper};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  padding: 2rem 3.2rem;
  justify-content: space-between;
  transition: 0.3s background, 0.3s color;

  @media screen and (max-width: 600px) {
    padding: 2.4rem 2.4rem 2.7rem 2.4rem;
  }
`;

export const ButtonsWrapper = styled(motion.div)`
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
  margin-left: auto;

  @media screen and (max-width: 600px) {
    padding: 2.2rem 2.4rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.detailsWrapper};
    position: fixed;
    bottom: 0;
    left: 0;
    order: 4;
  }
`;

export const PaidButton = styled(VioletButton)`
  @media screen and (max-width: 430px) {
    padding: 1.7rem 1.6rem;
  }
  @media screen and (max-width: 340px) {
    padding: 1.4rem;
  }
`;

export const EditButton = styled(GrayButton)`
  @media screen and (max-width: 430px) {
    padding: 1.7rem 1.6rem;
  }
  @media screen and (max-width: 340px) {
    padding: 1.4rem;
  }
`;

export const DeleteButton = styled(RedButton)`
  @media screen and (max-width: 430px) {
    padding: 1.7rem 1.6rem;
  }
  @media screen and (max-width: 340px) {
    padding: 1.4rem;
  }
`;

export const StatusText = styled.p`
  ${StandardTextSizing};
  color: ${({ theme }) => theme.colors.wildBlue};
  margin-right: 1.6rem;
`;
