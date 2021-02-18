import { createSlice } from "@reduxjs/toolkit";

const switchSensorSlice = createSlice({
  name: "switchSensor",
  initialState: {
    status: "idle",
    error: null,
  },
  reducers: {
    switchSensorLoading: (state) => {
      state.status = "loading";
    },
    switchSensorSuccessed: (state) => {
      state.status = "succeeded";
    },
    switchSensorError: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const {
  switchSensorLoading,
  switchSensorSuccessed,
  switchSensorError,
} = switchSensorSlice.actions;

export default switchSensorSlice.reducer;
