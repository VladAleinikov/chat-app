import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth/auth.api";
import { conversationApi } from "./conversation/conversation.api";
import { conversationReducer } from "./conversation/conversation.slice";
import { messagesApi } from "./message/messages.api";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
      [conversationApi.reducerPath]: conversationApi.reducer,
      [messagesApi.reducerPath]: messagesApi.reducer,
      conversation: conversationReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(conversationApi.middleware)
        .concat(messagesApi.middleware),
  });
};
