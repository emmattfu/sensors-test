import { createSlice } from "@reduxjs/toolkit";

const addSensorSlice = createSlice({
  name: "addSensor",
  initialState: {
    status: "idle",
    error: null,
  },
  reducers: {
    addSensorLoading: (state) => {
      state.status = "loading";
    },
    addSensorSuccessed: (state) => {
      state.status = "successed";
    },
    addSensorError: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const {
  addSensorLoading,
  addSensorSuccessed,
  addSensorError,
} = addSensorSlice.actions;

export default addSensorSlice.reducer;
