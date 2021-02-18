import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MAIN_COLOR } from "../../styled";

export const StyledSensorCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 385px;
  border: 2px solid ${({ color }) => color || MAIN_COLOR};
  border-radius: 5px;
  color: ${({ color }) => color || MAIN_COLOR};

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

export const StyledSensorCardTitle = styled(NavLink)`
  font-size: 24px;
  color: ${({ color }) => color || MAIN_COLOR};
  text-decoration: none;
  margin: 10px 0;
  align-self: center;
  cursor: pointer;
`;

export const StyledSensorType = styled.div`
  margin: 10px 0;
`;

export const StyledSensorID = styled.div`
  margin: 10px 0;
`;
