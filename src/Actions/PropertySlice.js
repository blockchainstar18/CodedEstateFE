import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
};

export const PropertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setId } = PropertySlice.actions;

export default PropertySlice.reducer;
