import { Skeleton } from "@/components/ui/skeleton";
import { Conversation } from "./conversation";

export const Conversations = () => {
  return <div className="py-2 flex flex-col gap-y-1 overflow-auto"></div>;
}

Conversations.Skeleton = function ConversationsSkeleton() {
  return (
    <div className="py-2 flex flex-col gap-y-1 overflow-auto">
      <Conversation.Skeleton />
      <Conversation.Skeleton />
      <Conversation.Skeleton />
      <Conversation.Skeleton />
    </div>
  );
} 