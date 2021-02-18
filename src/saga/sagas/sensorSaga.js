import { takeEvery, put } from "redux-saga/effects";
import { BASE_URL, ENDPOINTS, SENSORS } from "../../api/endpoints";
import {
  getSensorError,
  getSensorLoading,
  getSensorSuccessed,
} from "../../store/slices/sensorSlice";

function* onGetSensos({ payload }) {
  try {
    const response = yield fetch(`${BASE_URL}${ENDPOINTS[SENSORS].uri}`);
    const sensors = yield response.json();

    yield put(getSensorSuccessed(sensors));
  } catch (error) {
    yield put(getSensorError(error));
  }
}

export default function* getSensors() {
  yield takeEvery(getSensorLoading, onGetSensos);
}
