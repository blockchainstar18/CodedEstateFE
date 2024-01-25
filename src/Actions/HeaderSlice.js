import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: 1,
  submode: 0,
};

export const HeaderSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeaderMode: (state, action) => {
      state.mode = action.payload.mode;
      state.submode = action.payload.submode;
    },
  },
});

export const { setHeaderMode } = HeaderSlice.actions;

export default HeaderSlice.reducer;
