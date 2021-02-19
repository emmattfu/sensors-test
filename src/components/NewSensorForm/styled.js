import styled from "styled-components";
import { MAIN_COLOR } from "../../styled";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
`;

export const StyledInputWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 10px;
  }
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  font-size: 14px;
  border-radius: 5px;
  padding: 10px 5px;
  color: ${MAIN_COLOR};
  border: 1px solid ${MAIN_COLOR};
  outline: none;
  &:focus {
    border: 1px solid ${MAIN_COLOR};
  }
`;

export const StyledErrorMessage = styled.div`
  color: palevioletred;
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 2.8rem;
  background: transparent;
  color: ${MAIN_COLOR};
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-bottom: ${(props) => props.marginBottom + "px" || 0};
  border: 1px solid ${MAIN_COLOR};
  border-radius: 5px;
  outline: none;
  option {
    color: black;
    background-color: transparent;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
