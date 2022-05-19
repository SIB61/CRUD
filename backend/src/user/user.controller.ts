import {
  Get,
  Body,
  Controller,
  Delete,
  Patch,
  Post,
  UseGuards,
  Param,
  Request,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwtAuth.guard';
import { ReturningStatementNotSupportedError } from 'typeorm';
import { UpdateUserDto } from './dto/updateUserDto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  register(@Body() user: UserDto) {
    return this.userService.createUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':username')
  getUser(@Param('username') username: string, @Request() req: any) {
    if (username == req.user.username)
      return this.userService.getMyProfile(username);
    else return this.userService.getUserProfile(username);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':username')
  updateUser(
    @Param('username') username: string,
    @Body() user: UpdateUserDto,
    @Request() req: any,
  ) {
    const payload = req.user;
    if (payload.username == username)
      return this.userService.updateUser(username, user);
    else throw new HttpException("Don't have access", HttpStatus.BAD_REQUEST);
  }

  @Delete(':username')
  deleteUser() {}
}
