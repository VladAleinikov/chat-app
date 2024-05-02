import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Response } from 'express';
import { Model, Types } from 'mongoose';
import { SignupDto } from './dto/signup.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  private async generateTokenAndCookie(id: Types.ObjectId, response: Response) {
    const tokenPayload = {
      userId: id,
    };

    const accessToken = await this.jwtService.signAsync(tokenPayload, {
      secret: process.env.JWT_SECRET,
    });

    response.cookie('jwt', accessToken, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV !== 'development',
    });
  }

  async signup(dto: SignupDto, response: Response): Promise<User> {
    if (dto.password !== dto.confirmPassword) {
      throw new HttpException("Passwords don't match", 400);
    }

    const user = await this.userModel.findOne({ userName: dto.userName });

    if (user) {
      throw new HttpException('Username already exists', 400);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(dto.password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${dto.userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${dto.userName}`;

    const newUser = await this.userModel.create({
      ...dto,
      profilePicture: dto.gender === 'male' ? boyProfilePic : girlProfilePic,
      password: hashedPass,
    });

    await this.generateTokenAndCookie(newUser._id, response);

    return newUser;
  }
  async login(dto: LoginDto, response: Response): Promise<User> {
    const user = await this.userModel.findOne({ userName: dto.userName });
    const isPasswordCorrect = await bcrypt.compare(
      dto.password,
      user?.password || '',
    );

    if (!user || !isPasswordCorrect) {
      throw new HttpException('Invalid credantials', 400);
    }

    await this.generateTokenAndCookie(user._id, response);

    return user;
  }
  async logout(response: Response) {
    response.cookie("jwt", "", { maxAge: 0 });
  }
}
