import { Controller, Get, Query, Req, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthGuard } from "src/guards/auth.guard";

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get()
  getUsers(@Req() request: Request, @Query('searchQuery') searchQuery: string) {
    return this.usersService.getUsers(request, searchQuery);
  }
}