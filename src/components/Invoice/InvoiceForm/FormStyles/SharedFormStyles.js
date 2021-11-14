import styled, { css } from "styled-components";
import { Field } from "formik";
import {
  StandardBoxStyle,
  StandardTextSizing,
} from "../../../shared/SharedStyles";

export const ErrorStyles = css`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colors.burntSienna};
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  line-height: 3.2rem;
  margin-bottom: 4.8rem;
  transition: 0.3s color;
`;

export const FieldSet = styled.div`
  display: grid;
  gap: 2.4rem;
  min-width: 0;
`;

export const Legend = styled.legend`
  font-weight: 700;
  ${StandardTextSizing}
  color: ${({ theme }) => theme.colors.cornBlue};
`;

export const LargeLegend = styled.legend`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 3.2rem;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const Input = styled(Field)`
  ${StandardBoxStyle}
  border: ${({ theme, error }) =>
    error ? `1px solid ${theme.colors.burntSienna}` : ``};
  transition: 0.3s background, 0.3s border;
  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }
`;
