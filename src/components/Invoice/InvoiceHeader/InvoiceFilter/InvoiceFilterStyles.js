import styled from "styled-components";
import check from "../../../../images/icon-check.svg";
import { ReactComponent as ArrowIcon } from "../../../../images/icon-arrow-down.svg";
import clampBuilder from "../../../../utilities/clampBuilder.ts";
import { StandardTextSizing } from "../../../shared/SharedStyles";
import { motion } from "framer-motion";

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  margin-right: ${clampBuilder(375, 730, 1.85, 4)};

  &:focus-visible {
    outline: 3px dashed ${({ theme }) => theme.colors.heliotrope};
    outline-offset: 4px;
  }
`;

export const FilterTitle = styled.p`
  ${StandardTextSizing}
  font-weight: 700;
  margin-right: 1.6rem;
  user-select: none;
  transition: 0.3s color;
`;

export const Menu = styled(motion.ul)`
  list-style: none;
  background-color: ${({ theme }) => theme.colors.filterMenuBackground};
  width: 19.2rem;
  padding: 2.2rem 2.4rem 2.4rem 2.3rem;
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 8px;
  position: absolute;
  top: 5rem;
  right: 15.3rem;
  z-index: 10000;

  @media screen and (max-width: 540px) {
    right: 10.4rem;
  }
  @media screen and (max-width: 400px) {
    right: 7.9rem;
    top: 7rem;
  }
`;

export const CheckBox = styled.span`
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  background: ${({ theme }) => theme.colors.selago};
  box-sizing: border-box;
  border-radius: 2px;
  margin-right: 1.3rem;
  transition: 0.2s all;
  order: -1;
  background: ${({ $checked, theme }) =>
    $checked
      ? `${theme.colors.heliotrope} url(${check}) no-repeat
      center`
      : null};
`;

export const Label = styled.label`
  font-weight: 700;
  ${StandardTextSizing}
  color: ${({ theme }) => theme.colors.filterMenuLabel};
  text-transform: capitalize;

  &:hover + ${CheckBox} {
    border: 1px solid ${({ theme }) => theme.colors.cornBlue};
  }
`;

export const MenuItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

export const Arrow = styled(ArrowIcon)`
  transition: 0.2s transform;
  transform: rotate(${({ $menu }) => ($menu ? "180deg" : "0deg")});
`;

export const TemporaryText = styled.span`
  @media screen and (max-width: 540px) {
    display: none;
  }
`;

export const CheckboxButton = styled.button`
  display: flex;
  align-items: center;
  user-select: none;

  &:focus-visible {
    outline: 3px dashed ${({ theme }) => theme.colors.heliotrope};
    outline-offset: 3px;
  }
`;
