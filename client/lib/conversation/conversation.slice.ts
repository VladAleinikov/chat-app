import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrntConversationState{currentConversation: User | null}

const initialState: CurrntConversationState = {
  currentConversation: null
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    setConversation(state, action: PayloadAction<User>) {
      state.currentConversation = action.payload;
    }
  }
})

export const conversationActions = conversationSlice.actions;
export const conversationReducer = conversationSlice.reducer;