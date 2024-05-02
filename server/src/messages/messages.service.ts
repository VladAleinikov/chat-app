import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { Message, MessageDocument } from '../schemas/message.schema';
import {
  Conversation,
  ConversationDocument,
} from 'src/schemas/conversation.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
    @InjectModel(Conversation.name)
    private conversationModel: Model<ConversationDocument>,
  ) {}

  async sendMessage(
    receiverId: ObjectId,
    message: string,
    request: Request,
  ): Promise<Message> {
    const senderId = request['userId'];

    let conversation = await this.conversationModel.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await this.conversationModel.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await this.messageModel.create({
      receiverId,
      senderId,
      message,
    });

    conversation.messages.push(newMessage.id);
    await conversation.save();

    return newMessage;
  }

  async getMessages(receiverId: ObjectId, request: Request): Promise<Message[]> {
    const senderId = request['userId'];
    const conversation = await this.conversationModel.findOne({
      participants: { $all: [senderId, receiverId] }
    }).populate("messages");

    if (!conversation) {
      return [];
    }

    return conversation.messages;
  }
}
