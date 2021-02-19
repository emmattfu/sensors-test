import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sensorSelector } from "../../store/selectors";
import { getSensorLoading } from "../../store/slices/sensorSlice";
import Loader from "react-loader-spinner";
import { MAIN_COLOR, StyledLoading } from "../../styled";

const Sensor = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sensor = useSelector(sensorSelector);

  useEffect(() => {
    dispatch(getSensorLoading(id));
  }, [dispatch, id]);

  if (!sensor) {
    return (
      <StyledLoading>
        <Loader type='Puff' color={MAIN_COLOR} height={400} width={400} />
      </StyledLoading>
    );
  }

  return (
    <>
      <h2>
        {sensor.name} ({sensor.type})
      </h2>

      <Line
        data={{
          labels: sensor.dates.map((date) => date),
          datasets: [
            {
              label: `Sensor ${sensor.id}`,
              data: sensor.values.map((val) => val),
              borderColor: `${MAIN_COLOR}`,
              fill: true,
            },
          ],
        }}
        options={{ scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }}
      />
    </>
  );
};

export default Sensor;
