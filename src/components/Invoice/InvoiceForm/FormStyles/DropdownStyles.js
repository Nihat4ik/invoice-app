import styled from "styled-components";
import {
  StandardBoxStyle,
  StandardFormFocus,
  StandardTextSizing,
} from "../../../shared/SharedStyles";

export const DropdownWrapper = styled.div`
  cursor: pointer;
  grid-area: dropdownbox;
`;
export const DropdownBoxWrapper = styled.button`
  ${StandardBoxStyle}
  position:relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: 0.3s color, 0.3s background, 0.3s border;
`;

export const DropdownText = styled.p`
  font-weight: 700;
  ${StandardTextSizing}
`;

export const DropdownList = styled.ul`
  background-color: ${({ theme }) => theme.colors.dropdownBackground};
  position: absolute;
  top: 0;
  width: 100%;
  box-shadow: 0px 1rem 2rem rgba(72, 84, 159, 0.25);
  border-radius: 8px;
  list-style: none;
  top: calc(100% + 8px);
  left: 0;
`;

export const DropdownItem = styled.li`
  ${StandardFormFocus}
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  grid-template-areas:
    "label label"
    "dropdownbox dropdownbox";
`;

export const Label = styled.label`
  ${StandardTextSizing}
  color:${({ theme }) => theme.colors.shipCove};
  grid-area: label;
  margin-bottom: 1rem;
`;

export const DropdownButton = styled.button`
  grid-area: dropdownbox;
`;

export const DropdownListButton = styled.button`
  font-weight: 700;
  width: 100%;
  padding: 1.5rem 2.4rem 1.6rem 2.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.selago};
  ${StandardTextSizing}
  outline:none;
  transition: 0.2s color, 0.2s padding;

  &:hover {
    color: ${({ theme }) => theme.colors.heliotrope};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.heliotrope};
    padding-left: 3rem;
  }
`;
