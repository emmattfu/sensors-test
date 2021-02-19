import { takeEvery, put, call } from "redux-saga/effects";
import { fetchData } from "../../api/api";
import { SENSORS } from "../../api/endpoints";
import {
  getSensorsError,
  getSensorsLoading,
  getSensorsSuccessed,
} from "../../store/slices/sensorsSlice";

function* onGetSensors() {
  try {
    const sensors = yield call(fetchData, { method: "GET", endpoint: SENSORS });

    yield put(getSensorsSuccessed(sensors));
  } catch (error) {
    yield put(getSensorsError(error));
  }
}

export default function* getSensors() {
  yield takeEvery(getSensorsLoading, onGetSensors);
}
