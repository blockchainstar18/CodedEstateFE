import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNewMessage: false,
  messages: [],
  receiverReadingChat: null,
  messagesToSend: null,
  someoneToContact: null,
};

export const MessageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setNewMessage: (state, action) => {
      state.isNewMessage = true;
      state.messages.push(action.payload);
    },
    setEmpty: (state) => {
      state.isNewMessage = false;
      state.messages.length = 0;
    },
    setReadingNow: (state, action) => {
      state.receiverReadingChat = action.payload;
    },
    setMessagesToSend: (state, action) => {
      state.messagesToSend = action.payload;
    },
    setSomeoneToContact: (state, action) => {
      state.someoneToContact = action.payload;
    },
  },
});

export const {
  setNewMessage,
  setMessagesToSend,
  setEmpty,
  setReadingNow,
  setSomeoneToContact,
} = MessageSlice.actions;

export default MessageSlice.reducer;
