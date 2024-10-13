import { User } from "./user";

export type Message = {
  id: string;
  message: string;
  senderId: string;
  receiverId: string;
  sender: User;
  reciever: User;
  createdAt: string;
};
