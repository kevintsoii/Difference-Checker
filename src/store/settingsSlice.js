import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    "Lowercase Lines": false,
    "Trim Whitespace": false,
    "Collapse Unchanged": true,
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
