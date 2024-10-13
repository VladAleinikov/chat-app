import { Message as MessageType } from "@/types/message";
import { Message } from "./message";
import { useAppSelector } from "@/hooks/use-actions";

interface MessagesProps {
  messages: MessageType[];
}

export const Messages = ({ messages }: MessagesProps) => {
  const receiverId = useAppSelector(
    (store) => store.conversation.currentConversation?.id
  );
  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages.map((message) => (
        <Message
          key={message.id}
          isYourMessage={receiverId !== message.senderId}
          messageText={message.message}
          sentAt={message.createdAt}
          avatarUrl={message.sender.profilePicture}
        />
      ))}
    </div>
  );
};
