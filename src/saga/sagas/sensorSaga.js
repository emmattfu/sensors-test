import { takeEvery, put } from "redux-saga/effects";
import { BASE_URL, ENDPOINTS, SENSORS } from "../../api/endpoints";
import {
  getSensorError,
  getSensorLoading,
  getSensorSuccessed,
} from "../../store/slices/sensorSlice";

function* onGetSensor({ payload }) {

  try {
    const response = yield fetch(`${BASE_URL}${ENDPOINTS[SENSORS].uri}/${payload}`);
    const sensor = yield response.json();
    console.log(1)
    yield put(getSensorSuccessed(sensor));
  } catch (error) {
    yield put(getSensorError(error));
  }
}

export default function* getSensor() {
  yield takeEvery(getSensorLoading, onGetSensor);
}
