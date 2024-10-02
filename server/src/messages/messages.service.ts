import { Injectable } from '@nestjs/common';
import { Message } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}

  async sendMessage(
    receiverId: string,
    message: string,
    request: Request,
  ): Promise<Message> {
    const senderId = request['userId'];

    let conversation = await this.prisma.conversation.findFirst({
      where: {
        AND: [
          { participants: { some: { id: senderId } } },
          { participants: { some: { id: receiverId } } },
        ],
      },
    });

    if (!conversation) {
      conversation = await this.prisma.conversation.create({
        data: {
          participants: { connect: [{ id: receiverId }, { id: senderId }] },
        },
      });
    }

    const newMessage = await this.prisma.message.create({
      data: {
        receiverId,
        senderId,
        message,
      },
    });

    return newMessage;
  }

  async getMessages(receiverId: string, request: Request): Promise<Message[]> {
    const senderId = request['userId'];
    const conversation = await this.prisma.conversation.findFirst({
      where: {
        AND: [
          { participants: { some: { id: senderId } } },
          { participants: { some: { id: receiverId } } },
        ],
      },
      include: {
        messages: true,
      },
    });

    if (!conversation) {
      return [];
    }

    return conversation.messages;
  }
}
