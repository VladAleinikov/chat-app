import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useActions } from "@/hooks/use-actions";
import { cn } from "@/lib/utils";
import { User } from "@/types/user";
import React from "react";

interface ConversationProps {
  user: User;
  emoji: string;
  isActive: boolean;
}

export const Conversation = ({ user, emoji, isActive }: ConversationProps) => {
  const isOnline = false;
  const { setConversation } = useActions();

  return (
    <>
      <div
        onClick={() => setConversation(user)}
        className={cn(
          "flex gap-2 items-center hover:bg-sky-500 rounded px-2 py-1 cursor-pointer",
          isActive && "bg-sky-500"
        )}
      >
        <Avatar>
          <AvatarImage src={user.profilePicture} alt="avatar" />
          <AvatarFallback>CN</AvatarFallback>
          <div
            className={cn(
              "absolute right-0 w-2 h-2 rounded-full",
              isOnline ? "bg-green-400" : "bg-gray-400"
            )}
          />
        </Avatar>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{user.userName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

Conversation.Skeleton = function ConversationSkeleton() {
  return (
    <>
      <div className="flex gap-2 items-center rounded px-2 py-1 cursor-pointer">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex items-center justify-between gap-x-3">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-3 w-3 rounded-full" />
        </div>
      </div>
      <Separator />
    </>
  );
};
