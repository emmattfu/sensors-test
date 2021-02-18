import { all } from "redux-saga/effects";
import getSensors from "./sagas/SensorsSaga";
import switchSensor from "./sagas/switchSensorSaga";

export default function* rootSaga() {
  yield all([getSensors(), switchSensor()]);
}