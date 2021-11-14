import styled from "styled-components";
import { StandardTextSizing } from "../../../shared/SharedStyles";
import { ReactComponent as TrashIcon } from "../../../../images/icon-delete.svg";
import { Input } from "./SharedFormStyles";

export const ItemListWrapper = styled.div`
  display: grid;
  gap: 1.6rem;
  @media screen and (max-width: 650px) {
    gap: 4.8rem;
  }
`;

export const ItemDescription = styled.label`
  ${StandardTextSizing}
  color: ${({ theme }) => theme.colors.shipCove};
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  grid-area: ${({ area }) => area};
`;

export const ItemFormWrapper = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 21.4rem 4.6rem 10rem 4.5rem 3.4rem;
  grid-template-areas: "name qty price total icon";

  @media screen and (max-width: 650px) {
    grid-template-rows: repeat(2, minmax(0, auto));
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 0.5fr) 5.6rem;
    grid-template-areas:
      "name name name name"
      "qty price total icon";
    row-gap: 2.4rem;
    column-gap: 1.6rem;
  }
`;

export const QuantityInput = styled(Input)`
  padding-left: 0;
  padding-right: 0;
  text-align: center;
`;

export const ItemTotalText = styled.p`
  font-weight: 700;
  ${StandardTextSizing}
  color: ${({ theme }) => theme.colors.baliHai};
  word-break: break-all;
  margin: auto 0;
`;

export const Trash = styled(TrashIcon)`
  justify-self: right;
  align-self: center;
  cursor: pointer;

  path {
    transition: 0.2s all;
  }
  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.burntSienna};
    }
  }
`;

export const IconWrapper = styled.span``;

export const TrashButton = styled.button`
  grid-area: icon;
  justify-self: right;
  align-self: end;
  padding-bottom: 1.3rem;
  outline: none;

  &:focus-visible > svg {
    outline: 2px dashed ${({ theme }) => theme.colors.burntSienna};
    outline-offset: 5px;
  }
`;
