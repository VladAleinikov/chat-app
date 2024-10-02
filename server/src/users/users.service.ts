import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Prisma, User } from '@prisma/client';
import { Model } from 'mongoose';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUsers(request: Request, searchQuery = ''): Promise<User[]> {
    const loggedUserId = request['userId'];
    const searchUsers = await this.prisma.user.findMany({
      where: {
        id: {
          not: loggedUserId,
        },
        fullName: {
          contains: searchQuery
        }
      },
    });

    return searchUsers;
  }
}
