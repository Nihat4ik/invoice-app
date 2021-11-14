import styled from "styled-components";
import GrayButton from "../../../shared/GrayButton";
import VioletButton from "../../../shared/VioletButton";
import BlackButton from "../../../shared/BlackButton";

export const FormDashboardWrapper = styled.div`
  height: 11rem;
  max-width: 72rem;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 10500;
  padding: 3.1rem 5.6rem 3.1rem 15.9rem;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.formDashboard};
  align-items: center;
  border-radius: 0px 2rem 2rem 0px;
  transition: 0.3s;

  & > button:first-child {
    margin-right: ${({ mode }) => (mode === "create" ? "auto" : 0)};
  }

  & > button:last-child {
    margin-left: 8px;
  }

  @media screen and (max-width: 880px) {
    bottom: 8rem;
    padding: 3.1rem 5.6rem 3.1rem 5.4rem;
  }

  @media screen and (max-width: 880px) {
    padding: 2.1rem 2.4rem;
  }
  @media screen and (max-width: 380px) {
    padding: 5px;
    bottom: 7.2rem;
  }
`;

export const DiscardButton = styled(GrayButton)`
  @media screen and (max-width: 430px) {
    padding: 1.7rem 1.6rem;
  }
  @media screen and (max-width: 340px) {
    padding: 1.4rem;
  }
`;

export const DraftButton = styled(BlackButton)`
  @media screen and (max-width: 430px) {
    padding: 1.7rem 1.8rem;
  }
  @media screen and (max-width: 340px) {
    padding: 1.4rem;
  }
`;

export const SaveButton = styled(VioletButton)`
  @media screen and (max-width: 430px) {
    padding: 1.7rem 1.6rem;
  }
  @media screen and (max-width: 340px) {
    padding: 1.4rem;
  }
`;
