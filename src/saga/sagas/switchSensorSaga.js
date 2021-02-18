import { takeEvery, put } from "redux-saga/effects";
import { BASE_URL, ENDPOINTS, SENSORS } from "../../api/endpoints";
import {
  switchSensorError,
  switchSensorLoading,
  switchSensorSuccessed,
} from "../../store/slices/switchSensorSlice";
import { updateSensors } from "../../store/slices/sensorsSlice";

function* onSwitchSensor({ payload }) {
  try {
    const response = yield fetch(
      `${BASE_URL}${ENDPOINTS[SENSORS].uri}/${payload.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...payload, isActive: !payload.isActive }),
      }
    );

    const updatedSensor = yield response.json();

    yield put(switchSensorSuccessed());
    yield put(updateSensors(updatedSensor));
  } catch (error) {
    yield put(switchSensorError(error));
  }
}

export default function* switchSensor() {
  yield takeEvery(switchSensorLoading, onSwitchSensor);
}
