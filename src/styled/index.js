import styled from "styled-components";

export const MAIN_COLOR = "#1877f2";
export const DANGER = "#DC3545";
export const SECONDARY_COLOR = "#6C757D";

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  padding: 50px 10px;
`;

export const StyledLoading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  border: 1px solid ${({ color }) => color};
  border-radius: 5px;
  background-color: white;
  color: ${({ color }) => color || MAIN_COLOR};
  cursor: pointer;
  outline: none;
  & + & {
    margin-left: 15px;
  }

  &:hover {
    background-color: ${({ color }) => color || MAIN_COLOR};
    color: white;
  }

  &:disabled {
    background-color: ${SECONDARY_COLOR};
  }
`;

export const StyledBlockWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
  margin-top: 20px;
`;
