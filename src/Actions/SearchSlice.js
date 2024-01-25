import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  region: null,
  checkIn: null,
  checkOut: null,
  guests: {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  },
  amenities: {
    bathroom: 1,
    bedroom: 1,
    squareFeet: "",
  },
};

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setCheckIn: (state, action) => {
      state.checkIn = action.payload;
    },
    setCheckOut: (state, action) => {
      state.checkOut = action.payload;
    },
    setGuests: (state, action) => {
      state.guests = action.payload;
    },
    setAmenities: (state, action) => {
      state.amenities = action.payload;
    },
  },
});

export const { setRegion, setCheckIn, setCheckOut, setGuests, setAmenities } =
  SearchSlice.actions;

export default SearchSlice.reducer;
