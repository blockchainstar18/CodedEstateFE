import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { io } from "socket.io-client";

const initialState = {
  isAuthenticated: null,
  account: null,
  wallet: null,
};

export const AuthSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    connected: (state, action) => {
      state.account = action.payload.account;
      state.isAuthenticated = true;
      state.wallet = action.payload.wallet;
      axios
        .post("http://57.180.34.157:443/user/login", {
          account: action.payload.account,
        })
        .then(() => {});
    },
    disconnect: (state) => {
      state.account = null;
      state.isAuthenticated = null;
      state.wallet = null;
    },
  },
});

export const { connected, disconnect } = AuthSlice.actions;

export default AuthSlice.reducer;
