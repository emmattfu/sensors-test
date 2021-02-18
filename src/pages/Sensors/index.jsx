import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SensorCard from "../../components/SensorCard";
import SensorsFilter from "../../components/SensorsFilter";
import { sensorsSelector } from "../../store/selectors";
import { getSensorsLoading } from "../../store/slices/sensorsSlice";
import { StyledBlockWrapper } from "../../styled";

const Sensors = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSensorsLoading());
  }, [dispatch]);

  const sensors = useSelector(sensorsSelector);

  return (
    <>
      <SensorsFilter />
      <StyledBlockWrapper>
        {sensors.map((sensor) => (
          <SensorCard key={sensor.id} sensor={sensor} />
        ))}
      </StyledBlockWrapper>
    </>
  );
};

export default Sensors;
