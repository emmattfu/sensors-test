import React from "react";
import { StyledButton } from "../../styled";
import { StyledSensorsFilter } from "./styled";

const sensors = [
  { name: "All", id: 0 },
  { name: "Pressure", id: 1 },
  { name: "Humidity", id: 2 },
  { name: "Temperature", id: 3 },
];

const SensorsFilter = () => {
  return (
    <StyledSensorsFilter>
      {sensors.map((sensor) => (
        <StyledButton key={sensor.id}>{sensor.name}</StyledButton>
      ))}
    </StyledSensorsFilter>
  );
};

export default SensorsFilter;
