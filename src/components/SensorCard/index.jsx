import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { switchSensorLoading } from "../../store/slices/switchSensorSlice";
import { StyledButton, MAIN_COLOR, DANGER } from "../../styled";
import {
  StyledSensorCard,
  StyledSensorCardTitle,
  StyledSensorType,
  StyledSensorID,
} from "./styled";
import { pages } from "../../constants";

const SensorCard = ({ sensor }) => {
  const dispatch = useDispatch();

  const switchSensor = useCallback(() => {
    const isSwitch = window.confirm("Are you sure?");

    if (isSwitch) {
      dispatch(switchSensorLoading(sensor));
    } else {
      return null;
    }
  }, [dispatch, sensor]);

  return (
    <StyledSensorCard color={sensor.isActive ? DANGER : MAIN_COLOR}>
      <StyledSensorCardTitle
        color={sensor.isActive ? DANGER : MAIN_COLOR}
        to={`${pages.SENSOR.DEFEULT_PATH}/${sensor.id}`}
      >
        {sensor.name}
      </StyledSensorCardTitle>
      <StyledSensorID>
        <b>Sensor ID:</b> {sensor.id}
      </StyledSensorID>
      <StyledSensorType>
        <b>Sensor type:</b> {sensor.type}
      </StyledSensorType>
      <StyledButton
        onClick={switchSensor}
        value={sensor.id}
        color={sensor.isActive ? DANGER : MAIN_COLOR}
      >
        {sensor.isActive ? "Enable" : "Disable"}
      </StyledButton>
    </StyledSensorCard>
  );
};

export default SensorCard;
