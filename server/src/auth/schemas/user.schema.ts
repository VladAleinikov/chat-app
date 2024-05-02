import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    required: true,
  })
  fullName: string;

  @Prop({
    required: true,
    unique: true,
  })
  userName: string;

  @Prop({
    required: true,
    minlength: 6,
  })
  password: string;

  @Prop({
    required: true,
    enum: ['male', 'female'],
  })
  gender: string;

  @Prop({
    default: '',
  })
  profilePicture: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
