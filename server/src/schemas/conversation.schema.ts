import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schema';
import { Message } from './message.schema';

export type ConversationDocument = HydratedDocument<Conversation>;

@Schema({timestamps: true})
export class Conversation {
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    required: true,
  })
  participants: User[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
    required: true,
    default: []
  })
  messages: Message[];
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);
