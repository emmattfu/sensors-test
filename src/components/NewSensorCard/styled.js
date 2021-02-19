import styled from "styled-components";
import { StyledSensorCard } from "../SensorCard/styled";
import { FaPlus } from "react-icons/fa";
import { SECONDARY_COLOR } from "../../styled";

export const StyledNewSensorCard = styled(StyledSensorCard)`
  border: 2px dashed ${SECONDARY_COLOR};
  justify-content: center;
  align-items: center;
  color: ${SECONDARY_COLOR};
`;

export const StyledFaPlus = styled(FaPlus)`
  font-size: 35px;
  cursor: pointer;
`;
