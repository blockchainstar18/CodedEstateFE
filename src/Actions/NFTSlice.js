import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentNFT: null,
  myNFTs: [],
  allNFTs: [],
  NFTsSection: 0,
  uploadingData: {
    description: null,
    offers: null,
  },
};

export const NFTSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {
    setNFT: (state, action) => {
      state.currentNFT = action.payload;
    },
    setAllNFTs: (state, action) => {
      state.allNFTs = action.payload;
    },
    setMyNFTs: (state, action) => {
      state.myNFTs = action.payload;
    },
    updateNFT: (state, action) => {
      let flag = false;
      for (let i = 0; i < state.allNFTs.length; i++) {
        if (state.allNFTs[i]?.token_id == action.payload.token_id) {
          state.allNFTs[i] = action.payload;
          flag = true;
        }
      }
      if (!flag) state.allNFTs.push(action.payload);
    },
    setNFTsSection: (state, action) => {
      state.NFTsSection = action.payload;
    },
    setUploadingData: (state, action) => {
      state.uploadingData = action.payload;
    },
  },
});

export const {
  setNFT,
  setAllNFTs,
  setMyNFTs,
  updateNFT,
  setNFTsSection,
  setUploadingData,
} = NFTSlice.actions;

export default NFTSlice.reducer;
