import { createSelector } from "@reduxjs/toolkit";

const getState = (state) => state;

export const sensorsSelector = createSelector(
  getState,
  (state) => state.sensors.sensors
);
