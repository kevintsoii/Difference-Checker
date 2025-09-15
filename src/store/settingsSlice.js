import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCollapsed: false,
  isDarkMode: false,
  // Add other settings as needed
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggle: (state, action) => {
      const setting = action.payload;
      state[setting] = !state[setting];
    },
    setSetting: (state, action) => {
      const { setting, value } = action.payload;
      state[setting] = value;
    },
  },
});

export const { toggle, setSetting } = settingsSlice.actions;

export default settingsSlice.reducer;