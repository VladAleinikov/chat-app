import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

export const Conversation = () => {
  return (
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded px-2 py-1 cursor-pointer'>
      
    </div>
  )
}

Conversation.Skeleton = function ConversationSkeleton() {
  return (
    <>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex items-center justify-center gap-x-5">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-3 w-3 rounded-full" />
        </div>
      </div>
      <Separator/>
    </>
  );
}; 