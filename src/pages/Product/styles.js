import styled from "styled-components";

export const Container = styled.div`
  max-width: 780px;

  margin: 72px auto;

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

    > button {
      width: 150px;
    }
  }
`;

export const Content = styled.div`


`;


