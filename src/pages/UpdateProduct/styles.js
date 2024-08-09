import styled from "styled-components";


export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 32px;

`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 22px;


  > nav {
    display: flex;
    gap: 16px;

    > button {
      width: 150px;
    }
    > button:nth-child(2) {
      background-color: ${({ theme }) => theme.COLORS.RED};
    }

  }
`;

export const Form = styled.form`
  width: 100%;
  height: 70vh;
  padding: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  border-radius: 7px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

