import React from "react";
import styled from "styled-components";

const InputGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${({ groupSize }) => groupSize},
    minmax(0, 1fr)
  );
  gap: 2.4rem;

  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(
      ${({ groupSize }) => groupSize - 1},
      minmax(0, 1fr)
    );
    & > div:last-child {
      grid-column: 1/3;
    }
  }
`;

const InputGroupSet = ({ children, groupSize }) => {
  return (
    <InputGroupWrapper groupSize={groupSize}>{children}</InputGroupWrapper>
  );
};

export default InputGroupSet;
