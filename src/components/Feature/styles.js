import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 200px;
  height: 200px;

  background-color: ${({ theme }) => theme.COLORS.BRAND_500};
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  border-radius: 7px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 0;


  > svg {
    flex: 1;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    background-color: ${({ theme }) => theme.COLORS.BRAND_600};
    width: 100%;
    padding: 24px 0;
    text-align: center;
    font-weight: 700;
  }
`;
