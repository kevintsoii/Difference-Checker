import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    showAll: true,
  },
  reducers: {
    toggle: (state, action) => {
      const key = action.payload;
      state[key] = !state[key];
    },
  },
});

export const { toggle } = settingsSlice.actions;

export default settingsSlice.reducer;
