import { createSlice } from "@reduxjs/toolkit";

const sensorsSlice = createSlice({
  name: "sensors",
  initialState: {
    sensors: [],
    status: "idle",
    error: null,
  },
  reducers: {
    getSensorsLoading: (state) => {
      state.status = "loading";
    },
    getSensorsSuccessed: (state, action) => {
      state.status = "succeeded";
      state.sensors = action.payload;
    },
    getSensorsError: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
    updateSensors: (state, action) => {
      console.log(action.payload);
      const index = state.sensors.findIndex(
        (el) => el.id === action.payload.id
      );

      state.sensors.splice(index, 1, action.payload);
    },
  },
});

export const {
  getSensorsLoading,
  getSensorsSuccessed,
  getSensorsError,
  updateSensors,
} = sensorsSlice.actions;

export default sensorsSlice.reducer;
