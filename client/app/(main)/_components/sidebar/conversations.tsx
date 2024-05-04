
import { Conversation } from "./conversation";

export const Conversations = () => {
  const conversations: any[] = [];

  if (!conversations) {
    return (
      <div className="py-2 flex flex-col gap-y-1 overflow-auto">
        <Conversation.Skeleton />
        <Conversation.Skeleton />
        <Conversation.Skeleton />
        <Conversation.Skeleton />
      </div>
    )
  }
  return <div className="py-2 flex flex-col gap-y-1 overflow-auto">
    <Conversation/>
    <Conversation/>
    <Conversation/>
    <Conversation/>
  </div>;
}