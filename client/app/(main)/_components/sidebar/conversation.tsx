import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import React from 'react'

export const Conversation = () => {
  const isOnline = false;
  return (
    <>
      <div className='flex gap-2 items-center hover:bg-sky-500 rounded px-2 py-1 cursor-pointer'>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
          <AvatarFallback>CN</AvatarFallback>
          <div className={cn(
            "absolute right-0 w-2 h-2 rounded-full",
            isOnline ? "bg-green-400" : "bg-gray-400"
          )} />
        </Avatar>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className='font-bold text-gray-200'></p>
            <span className='text-xl'></span>
          </div>
        </div>
      </div>
      <Separator />
    </>
  )
}

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