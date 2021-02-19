import { takeEvery, put, call } from "redux-saga/effects";
import { fetchData } from "../../api/api";
import { SENSORS } from "../../api/endpoints";
import {
  addSensorError,
  addSensorLoading,
  addSensorSuccessed,
} from "../../store/slices/addSensorSlice";
import { addSensor } from "../../store/slices/sensorsSlice";

function* onAddSensor({ payload: { formData, onSubmitProps } }) {
  try {
    yield call(fetchData, {
      method: "POST",
      body: JSON.stringify(formData),
      endpoint: SENSORS,
    });

    yield put(addSensorSuccessed());
    yield onSubmitProps.setSubmitting(false);
    yield onSubmitProps.resetForm({ values: "" });
    yield put(addSensor(formData));
  } catch (error) {
    yield put(addSensorError(error));
  }
}

export default function* getSensor() {
  yield takeEvery(addSensorLoading, onAddSensor);
}
