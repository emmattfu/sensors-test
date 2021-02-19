import styled from "styled-components";
import { StyledSensorCard } from "../SensorCard/styled";
import {FaPlus} from "react-icons/fa"

export const StyledNewSensorCard = styled(StyledSensorCard)`
    border: 2px dashed black;
`

export const StyledFaPlus = styled(FaPlus)`
    align-self: center;
    font-size: 35px;
`