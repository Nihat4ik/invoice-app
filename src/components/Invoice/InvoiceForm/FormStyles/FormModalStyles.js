import styled from "styled-components";
import { Form } from "formik";
import { motion } from "framer-motion";

export const ModalScreen = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightBlack};

  position: fixed;
  top: 0;
  left: 0;
`;

export const Modal = styled(motion.div)`
  height: 100vh;
  background: ${({ theme }) => theme.colors.formWrapper};
  border-radius: 0px 2rem 2rem 0px;
  padding: 5.6rem 3.2rem 3.2rem 16.1rem;
  max-width: 72rem;
  position: relative;
  top: 0;
  transition: 0.3s background;
  @media screen and (max-width: 880px) {
    max-width: 61.6rem;
    padding: 5.6rem 3.2rem 3.2rem 5.6rem;
    top: 8rem;
  }
  @media screen and (max-width: 650px) {
    padding: 3.2rem 8px 0 2.4rem;
  }
  @media screen and (max-width: 650px) {
    max-width: 100%;
    border-radius: 0;
  }
  @media screen and (max-width: 375px) {
    top: 7.2rem;
  }

  &::before {
    content: "";
    width: 100%;
    height: 10rem;
    position: absolute;
    left: 0;
    bottom: 11rem;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );

    z-index: 1000000;
    @media screen and (max-width: 880px) {
      bottom: 18.9rem;
      height: 8rem;
    }
  }
`;

export const FormWrapper = styled(Form)`
  display: grid;
  overflow-y: scroll;
  padding-right: 1.6rem;
  padding-bottom: 6rem;
  scrollbar-color: ${({ theme }) => theme.colors.selago} transparent;
  scrollbar-width: thin;
  height: 70%;
  gap: 4.8rem;
  @media screen and (max-width: 880px) {
    padding-right: 8px;
    height: 57%;
    padding-bottom: 4rem;
  }
  @media screen and (max-width: 420px) {
    padding-bottom: 10rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.selago};
    border-radius: 4px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
`;
