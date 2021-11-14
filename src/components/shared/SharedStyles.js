import { css } from "styled-components";

export const StandardTextSizing = css`
  font-size: ${({ theme }) => theme.fontSizes.standard};
  line-height: ${({ theme }) => theme.lineHeights.standard}; ;
`;

export const StandardBoxStyle = css`
  ${StandardTextSizing}
  background: ${({ theme }) => theme.colors.inputBoxWrapper};
  border: 1px solid ${({ theme }) => theme.colors.inputBoxColor};
  color: ${({ theme }) => theme.colors.inputTextColor};
  border-radius: 4px;
  font-weight: 700;
  width: 100%;
  outline: none;
  padding: 1.7rem 2rem;
  font-family: ${({ theme }) => theme.fonts.spartan};
  transition: 0.2s border;
  max-height: 4.8rem;
  outline: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.heliotrope};
  }
`;

export const StandardFormFocus = css`
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.heliotrope};
  }
`;
