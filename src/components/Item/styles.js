import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 16px;
  border-radius: 5px;
  margin: 16px 0;

  display: flex;
  justify-content: center;

  border: none;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  }

  > main {
    h2 {
      font-size: 24px;
      margin-bottom: 8px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > strong {
      font-size: 18px;
    }

    > p {
      margin: 4px 0;
      font-size: 14px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
