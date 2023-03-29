import { createSlice } from "@reduxjs/toolkit";

const bgSlice = createSlice({
  name: "background",
  initialState: {
    url: "",
  },
  reducers: {
    setBgUrl: (state, action) => {
      state.url = `url(${action.payload})`;
    },
  },
});

export const { setBgUrl } = bgSlice.actions;

export default bgSlice.reducer;
