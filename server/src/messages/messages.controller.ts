import { Body, Controller, Get, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { MessagesService } from './messages.service';
import { ObjectId } from 'mongoose';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('/messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @UseGuards(AuthGuard)
  @Post('/send/:id')
  sendMessage(
    @Param('id') id: ObjectId,
    @Body() body: {message: string},
    @Req() request: Request,
  ) {
    return this.messagesService.sendMessage(id, body.message, request);
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  getMessages(
    @Param('id') id: ObjectId,
    @Req() request: Request
  ) {
    return this.messagesService.getMessages(id, request)
  }
}
