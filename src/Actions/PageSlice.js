import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: null,
};

export const PageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = PageSlice.actions;

export default PageSlice.reducer;
