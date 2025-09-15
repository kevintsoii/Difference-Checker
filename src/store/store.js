import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settingsSlice.js";

export default configureStore({
  reducer: {
    settings: settingsReducer,
  },
});