import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sensorSelector } from "../../store/selectors";
import { getSensorLoading } from "../../store/slices/sensorSlice";

const Sensor = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sensor = useSelector(sensorSelector);

  useEffect(() => {
    console.log(1);
    dispatch(getSensorLoading(id));
  }, [dispatch, id]);

  if (!sensor) {
    return <h2>Loading</h2>;
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
              borderColor: "#3333ff",
              fill: true,
            },
          ],
        }}
        options= {{ scales: {yAxes: [{ticks: {beginAtZero: true}}]} }}
      />
    </>
  );
};

export default Sensor;
