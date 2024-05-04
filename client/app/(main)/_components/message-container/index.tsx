import { MessageInput } from "./message-input"
import { Messages } from "./messages"
import { NoChatSelected } from "./no-chat-selected";


export const MessageContainer = () => {
      const selectedChat = "asd";

      if (!selectedChat) {
            return (
                  <NoChatSelected />
            )
      }
      return (
            <div className="md:min-w-[450px] flex flex-col">
                  <div className="bg-slate-500 px-4 py-2 mb-2">
                        <span>Для: </span>
                        <span className="text-gray-900 font-bold">ЛДЖДфыв</span>
                  </div>
                  <Messages />
                  <MessageInput />
            </div>
      )
}
