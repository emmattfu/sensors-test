import { takeEvery, put, call } from "redux-saga/effects";
import { fetchData } from "../../api/api";
import { SENSORS } from "../../api/endpoints";
import {
  getSensorError,
  getSensorLoading,
  getSensorSuccessed,
} from "../../store/slices/sensorSlice";

function* onGetSensor({ payload }) {
  try {
    const sensor = yield call(fetchData, {
      method: "GET",
      endpoint: SENSORS,
      id: payload,
    });

    yield put(getSensorSuccessed(sensor));
  } catch (error) {
    yield put(getSensorError(error));
  }
}

export default function* addSensor() {
  yield takeEvery(getSensorLoading, onGetSensor);
}
