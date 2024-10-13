import { Injectable } from '@nestjs/common';
import { Conversation, Message } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}

  async sendMessage(
    receiverId: string,
    message: string,
    request: Request,
  ): Promise<Conversation> {
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

    conversation = await this.prisma.conversation.update({
      where: { id: conversation.id },
      data: {
        messages: {
          create: [
            {
              receiverId,
              senderId,
              message,
            },
          ],
        },
      },
    });

    return conversation;
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
        messages: {
          include: { receiver: true, sender: true },
        },
      },
    });

    if (!conversation) {
      return [];
    }

    return conversation.messages;
  }
}
