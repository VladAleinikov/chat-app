import { getRandomEmoji } from "@/lib/emojis";
import { Conversation } from "./conversation";
import { User } from "@/types/user";
import { useAppSelector } from "@/hooks/use-actions";

interface ConversationsProps {
  conversations: User[];
}

export const Conversations = ({ conversations }: ConversationsProps) => {
  const { currentConversation } = useAppSelector(store => store.conversation)

  return (
    <div className="py-2 flex flex-col gap-y-1 overflow-auto">
      {conversations.map((user) => (
        <Conversation user={user} key={user.id} emoji={getRandomEmoji()} isActive={currentConversation?.id === user.id} />
      ))}
    </div>
  );
};

Conversations.Skeleton = () => {
  return (
      <div className="py-2 flex flex-col gap-y-1 overflow-auto">
        <Conversation.Skeleton />
        <Conversation.Skeleton />
        <Conversation.Skeleton />
        <Conversation.Skeleton />
      </div>
  )
}