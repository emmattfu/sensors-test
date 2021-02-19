import { createSelector } from "@reduxjs/toolkit";

const getState = (state) => state;

export const sensorsSelector = createSelector(
  getState,
  (state) => state.sensors.sensors
);

export const sensorSelector = createSelector(
  getState,
  (state) => state.sensor.sensor
);

export const modalSelector = createSelector(
  getState,
  state => state.modal.isOpen 
)