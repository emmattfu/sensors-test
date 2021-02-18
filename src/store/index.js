import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";
import sensorSlice from "./slices/sensorSlice";
import sensorsSlice from "./slices/sensorsSlice";
import switchSensorSlice from "./slices/switchSensorSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    sensors: sensorsSlice,
    sensor: sensorSlice,
    switchSensor: switchSensorSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;