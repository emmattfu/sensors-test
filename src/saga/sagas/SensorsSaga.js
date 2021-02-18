import { takeEvery, put } from "redux-saga/effects";
import { BASE_URL, ENDPOINTS, SENSORS } from "../../api/endpoints";
import {
  getSensorsError,
  getSensorsLoading,
  getSensorsSuccessed,
} from "../../store/slices/sensorsSlice";

function* onGetSensors() {
  try {
    const response = yield fetch(`${BASE_URL}${ENDPOINTS[SENSORS].uri}`);
    const sensors = yield response.json();

    yield put(getSensorsSuccessed(sensors));
  } catch (error) {
    yield put(getSensorsError(error));
  }
}

export default function* getSensors() {
  yield takeEvery(getSensorsLoading, onGetSensors);
}
