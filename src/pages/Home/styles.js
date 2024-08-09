import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > main {
    display: flex;
    gap: 16px;
  }
`;

export const Content = styled.nav`
  width: 100%;

  display: flex;
  max-width: 632px;
  margin-bottom: 64px;

  > h1 {
    flex: 1;
  }

  > button {
        background-color: transparent;
        border: none;
    }

  > aside {
    display: flex;
    align-items: center;

    &::after {
        content:"";
        height: 24px;
        width: 1px;
        background-color: ${({ theme }) => theme.COLORS.GRAY_600};
        margin:0 16px;
    }
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }
`;

