import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},
});

export const {} = musicSlice.actions;

export default musicSlice.reducer;
