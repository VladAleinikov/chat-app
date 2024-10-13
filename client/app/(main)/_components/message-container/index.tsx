"use client"

import { useAppSelector } from "@/hooks/use-actions";
import { MessageInput } from "./message-input";
import { Messages } from "./messages";
import { NoChatSelected } from "./no-chat-selected";
import { useGetMessagesQuery } from "@/lib/message/messages.api";

export const MessageContainer = () => {
  const { currentConversation } = useAppSelector((store) => store.conversation);
  const {data: messages, isLoading } = useGetMessagesQuery({receiverId: currentConversation?.id!});
  
  if (!currentConversation || isLoading || !messages) {
    return <NoChatSelected />;
  }


  return (
    <div className="md:min-w-[450px] flex flex-col">
      <div className="bg-slate-500 px-4 py-2 mb-2">
        <span>Для: </span>
        <span className="text-gray-900 font-bold">
          {currentConversation.userName}
        </span>
      </div>
      <Messages messages={messages}/>
      <MessageInput receiverId={currentConversation.id} />
    </div>
  );
};
