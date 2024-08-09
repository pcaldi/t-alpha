import styled from "styled-components";

export const Container = styled.button`
   width: 100%;
   padding: 16px;
   background-color: ${({ theme }) => theme.COLORS.GRAY_800};
   color: ${({ theme }) => theme.COLORS.WHITE};
   border-radius: 5px;
   margin-bottom: 16px;

   border: none;

   display: flex;
   flex-direction: column;

> main {
  padding: 16px;


  > section {

    > strong {
      font-size: 16px;
    }

    > p {
      margin-bottom: 12px;
      font-size: 14px;
      margin-top: 5px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
}

`;

