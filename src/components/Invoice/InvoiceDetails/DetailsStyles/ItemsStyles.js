import styled from "styled-components";
import { StandardTextSizing } from "../../../shared/SharedStyles";

export const Wrapper = styled.div`
  grid-area: items;
`;

export const ItemsWrapper = styled.div`
  display: grid;
  margin-top: 2.4rem;
  row-gap: 3.2rem;
  background: ${({ theme }) => theme.colors.ghostWhite};
  border-radius: 8px 8px 0px 0px;
  padding: 3.2rem 3.2rem 4rem 3.2rem;
  transition: 0.3s background;
  @media screen and (max-width: 680px) {
    padding: 2.4rem;
    row-gap: 2.4rem;
  }
`;

export const TotalWrapper = styled.div`
  background: ${({ theme }) => theme.colors.descriptionTotalBackground};
  border-radius: 0px 0px 8px 8px;
  padding: 2.4rem 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s background;
`;

export const ItemDescriptionTitle = styled.h4`
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.shipCove};
  transition: 0.3s color;
`;

export const BoldBlackDescription = styled.p`
  ${StandardTextSizing}
  font-weight: 700;
`;

export const BoldGrayDescription = styled.p`
  ${StandardTextSizing}
  font-weight: 700;
  color: ${({ theme }) => theme.colors.shipCove};
  transition: 0.3s color;
`;

export const ItemTitlesWrapper = styled.div`
  display: grid;
  grid-template-columns: 28.6rem minmax(0, 2.9rem) repeat(2, minmax(0, auto));

  & > h4:nth-child(3),
  & > h4:nth-child(4) {
    justify-self: end;
  }
`;

export const ItemDescriptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 28.6rem minmax(0, 2.9rem) repeat(2, minmax(0, auto));
  & > p:nth-child(2) {
    justify-self: center;
  }
  & > p:nth-child(3),
  & > p:nth-child(4) {
    justify-self: end;
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr 1fr;
    & > p:nth-of-type(2) {
      align-self: center;
      justify-self: right;
    }
  }
`;

export const ItemDescriptionSpan = styled.span`
  display: block;
  font-weight: 700;
  ${StandardTextSizing}
  color: ${({ theme }) => theme.colors.shipCove};
  margin-top: 8px;
  transition: 0.3s color;
`;

export const AmountText = styled.h4`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const TotalAmount = styled.p`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.2rem;
  text-align: right;
  color: ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 680px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 680px) {
    font-size: 1.6rem;
  }
`;
