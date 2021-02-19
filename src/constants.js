export const pages = {
  SENSORS: {
    DEFAUTL_PATH: "/",
  },
  SENSOR: {
    DEFEULT_PATH: "/sensor",
    INDEX: "/sensor/:id",
  },
};

export const sensorTypes = [
  { text: "Select type of your sensor", value: "" },
  { text: "Temperature", value: "temperature" },
  { text: "Pressure", value: "pressure" },
  { text: "Humidity", value: "humidity" },
];
