import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  border-radius: 7px;
  padding: 12px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }
`;
