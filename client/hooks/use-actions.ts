import { conversationActions } from "@/lib/conversation/conversation.slice";
import { RootState, AppStore, AppDispatch } from "@/types/redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const actions = {
      ...conversationActions
};

export const useActions = () => {
      const dispatch = useDispatch();
      return bindActionCreators(actions, dispatch)
}