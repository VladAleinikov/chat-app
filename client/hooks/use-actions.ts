import { conversationActions } from "@/lib/conversation/conversation.slice";
import { RootState, AppStore, AppDispatch } from "@/types/redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

const actions = {
      ...conversationActions
};

export const useActions = () => {
      const dispatch = useDispatch();
      return bindActionCreators(actions, dispatch)
}