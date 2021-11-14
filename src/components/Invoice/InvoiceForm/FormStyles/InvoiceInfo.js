import styled from "styled-components";
import { StandardBoxStyle } from "../../../shared/SharedStyles";

export const CalendarIconWrapper = styled.span`
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
`;

export const DateInputWrapper = styled.div`
  position: relative;
`;

export const CalendarInput = styled.button`
  width: 100%;
  outline: none;
  border-radius: 4px;
  ${StandardBoxStyle}
`;
