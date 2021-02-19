import { takeEvery, put, call } from "redux-saga/effects";
import { SENSORS } from "../../api/endpoints";
import {
  switchSensorError,
  switchSensorLoading,
  switchSensorSuccessed,
} from "../../store/slices/switchSensorSlice";
import { updateSensors } from "../../store/slices/sensorsSlice";
import { fetchData } from "../../api/api";

function* onSwitchSensor({ payload }) {
  const body = JSON.stringify({ ...payload, isActive: !payload.isActive });

  try {
    const updatedSensor = yield call(fetchData, {
      method: "PUT",
      body,
      id: payload.id,
      endpoint: SENSORS,
    });

    yield put(switchSensorSuccessed());
    yield put(updateSensors(updatedSensor));
  } catch (error) {
    yield put(switchSensorError(error));
  }
}

export default function* switchSensor() {
  yield takeEvery(switchSensorLoading, onSwitchSensor);
}
