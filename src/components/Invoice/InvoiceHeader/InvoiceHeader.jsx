import React, { useContext } from "react";
import İnvoiceFilter from "./InvoiceFilter/InvoiceFilter";
import VioletButton from "../../shared/VioletButton";
import InvoiceHeaderTitle from "./InvoiceHeaderTitle";
import { ReactComponent as PlusIcon } from "../../../images/icon-plus.svg";
import { TemporaryText } from "./InvoiceFilter/InvoiceFilterStyles";
import { AppContext } from "../../Context/AppProvider";
import { headerVariants } from "./InvoiceHeaderAnimations";
import {
  Header,
  InnerWrapper,
  Wrapper,
  ButtonIcon,
  ButtonText,
} from "./InvoiceHeaderStyles";

const InvoiceHeader = () => {
  const { setFormOpen, setFormType } = useContext(AppContext);
  const onCreateClick = () => {
    setFormType("create");
    setFormOpen(true);
  };

  return (
    <Header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      exit="exit"
    >
      <Wrapper>
        <InvoiceHeaderTitle />
        <InnerWrapper>
          <İnvoiceFilter />
          <VioletButton onClick={onCreateClick}>
            <ButtonIcon>
              <PlusIcon />
            </ButtonIcon>
            <ButtonText>
              New <TemporaryText>Invoice</TemporaryText>
            </ButtonText>
          </VioletButton>
        </InnerWrapper>
      </Wrapper>
    </Header>
  );
};

export default InvoiceHeader;
