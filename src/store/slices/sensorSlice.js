import { createSlice } from "@reduxjs/toolkit";

const sensorSlice = createSlice({
  name: "sensor",
  initialState: {
    sensor: null,
    status: "idle",
    error: null,
  },
  reducers: {
    getSensorLoading: (state) => {
      state.status = "loading";
    },
    getSensorSuccessed: (state, action) => {
      state.status = "succeeded";
      state.sensor = action.payload;
    },
    getSensorError: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
    clearPrevSensor: (state) => {
      state.sensor = null
    }
  },
});

export const {
  getSensorLoading,
  getSensorSuccessed,
  getSensorError,
} = sensorSlice.actions;

export default sensorSlice.reducer;
