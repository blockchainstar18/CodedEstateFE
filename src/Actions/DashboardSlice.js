import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: 0,
};

export const DashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setDashboardMode } = DashboardSlice.actions;

export default DashboardSlice.reducer;
