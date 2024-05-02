import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUsers(request: Request, searchQuery = ''): Promise<User[]> {
    const loggedUserId = request['userId'];
    const searchUsers = await this.userModel
      .find({
        _id: { $ne: loggedUserId },
        fullName: { $regex: new RegExp(searchQuery, 'i') },
      })
      .select('-password');

    return searchUsers;
  }
}
