import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface MessageProps {
      isYourMessage: boolean,
      messageText: string,
      sentAt: string,
      avatarUrl?: string,
}

export const Message = ({ isYourMessage, messageText, sentAt, avatarUrl }: MessageProps) => {
      return (
            <div className={cn(
                  "w-full flex gap-x-3 justify-end",
                  isYourMessage ? "" : "flex-row-reverse"
            )}>
                  <div className={cn(
                        "flex flex-col gap-x-0.5",
                        isYourMessage ? "items-end" : "items-start"
                  )}>
                        <p className='p-1 bg-blue-500 rounded-lg text-white'>{messageText}</p>
                        <p className='text-xs text-gray-400'>{sentAt}</p>
                  </div>
                  {
                        isYourMessage || !avatarUrl
                              ? null
                              : <Avatar>
                                    <AvatarImage src={avatarUrl} alt="avatar" />
                                    <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                  }
            </div>
      )
}
