import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewSensorCard from "../../components/NewSensorCard";
import SensorCard from "../../components/SensorCard";
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
      <h1>List of avaible sensors</h1>
      <StyledBlockWrapper>
        {sensors.map((sensor) => (
          <SensorCard key={sensor.id} sensor={sensor} />
        ))}
        <NewSensorCard />
      </StyledBlockWrapper>
    </>
  );
};

export default Sensors;
