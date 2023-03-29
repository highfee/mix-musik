import { configureStore } from "@reduxjs/toolkit";
import bgSlice from "./bgSlice";

export const store = configureStore({
  reducer: {
    bg: bgSlice,
  },
});
