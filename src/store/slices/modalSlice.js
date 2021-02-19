import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    switchModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { switchModal } = modalSlice.actions;

export default modalSlice.reducer;