import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled(motion.header)``;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonIcon = styled.span`
  border-radius: 100%;
  width: 3.2rem;
  height: 3.2rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 8px;
`;

export const ButtonText = styled.span`
  user-select: none;
  margin-left: 2.4rem;
`;
