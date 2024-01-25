import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  images: [],
};

export const GallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    showGallery: (state, action) => {
      state.show = true;
      state.images = action.payload;
    },
    hideGallery: (state) => {
      state.show = false;
      state.images = [];
    },
  },
});

export const { showGallery, hideGallery } = GallerySlice.actions;

export default GallerySlice.reducer;
