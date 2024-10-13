import { useSendMessageMutation } from "@/lib/message/messages.api";
import { Send } from "lucide-react";
import React, { useRef } from "react";

interface MessageInputProps {
  receiverId: string;
}

export const MessageInput = ({ receiverId }: MessageInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const onSendMessage = () => {
    if (inputRef.current && inputRef.current.value) {
      sendMessage({
        receiverId,
        message: inputRef.current.value,
      });
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSendMessage();
    }
  };
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          ref={inputRef}
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-700 text-white"
          placeholder="Отправьте сообщение"
          onKeyDown={onKeyDown}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
          onClick={onSendMessage}
          disabled={isLoading}
        >
          <Send className="w-5 h-5 text-white hover:text-blue-500 transition" />
        </button>
      </div>
    </form>
  );
};
