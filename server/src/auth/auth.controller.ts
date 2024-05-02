import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { Response } from 'express';
import { LoginDto } from './dto/login.dto';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signup(
    @Body() dto: SignupDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.authService.signup(dto, response);
  }

  @Post('/login')
  login(@Body() dto: LoginDto, @Res({ passthrough: true }) response: Response) {
    return this.authService.login(dto, response);
  }

  @Post('/logout')
  logout(@Res({ passthrough: true }) response: Response) {
    return this.authService.logout(response);
  }
}
