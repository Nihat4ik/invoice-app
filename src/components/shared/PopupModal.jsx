import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import ReactDOM from "react-dom";
import GrayButton from "./GrayButton";
import RedButton from "./RedButton";
import ReactFocusLock from "react-focus-lock";

const ModalScreen = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2.4rem;
  z-index: 1000;
`;

const Modal = styled(motion.div)`
  background: ${({ theme }) => theme.colors.modalWrapper};
  box-shadow: 0px 1rem 1rem -1rem rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  max-width: 48rem;
  width: 100%;
  padding: 4.8rem;

  @media screen and (max-width: 420px) {
    padding: 3.2rem;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.2rem;

  margin-bottom: 1.3rem;
  @media screen and (max-width: 420px) {
    font-size: 2rem;
    margin-bottom: 8px;
  }
`;

const DeletionMessage = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colors.baliHai};
  margin-bottom: 1.6rem;
  @media screen and (max-width: 420px) {
    margin-bottom: 2.4rem;
  }
`;

const ConfirmButton = styled(RedButton)`
  margin-left: 8px;
`;
const CancelButton = styled(GrayButton)``;

const ButtonsBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const modalVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

const modalContentVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const PopupModal = ({
  setModal,
  modalMessage,
  buttonText,
  onButtonClick,
  actionType,
}) => {
  const onCancelClick = () => {
    return setModal(false);
  };

  const onModalClick = (e) => {
    if (e.target.classList.contains("popup-modal")) setModal(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        setModal(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setModal]);

  const modal = (
    <ReactFocusLock>
      <ModalScreen
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        onClick={onModalClick}
        className="popup-modal"
        aria-modal
        aria-label={`${actionType} modal`}
      >
        <Modal
          variants={modalContentVariants}
          initial="hidden"
          animate="visible"
        >
          <Title>Confirm {actionType}</Title>
          <DeletionMessage>{modalMessage}</DeletionMessage>
          <ButtonsBox>
            <CancelButton onClick={onCancelClick}>Cancel</CancelButton>
            <ConfirmButton onClick={onButtonClick}>{buttonText}</ConfirmButton>
          </ButtonsBox>
        </Modal>
      </ModalScreen>
    </ReactFocusLock>
  );

  return ReactDOM.createPortal(modal, document.getElementById("modal"));
};

export default PopupModal;
