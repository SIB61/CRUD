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
import { UpdateUserDto } from './dto/updateUserDto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async register(@Body() user: UserDto) {
    return this.userService.createUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':username')
  async getUser(@Param('username') username: string, @Request() req: any) {
    if (username == req.user.username)
      return this.userService.getMyProfile(username);
    else return this.userService.getUserProfile(username);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':username')
  async updateUser(
    @Param('username') username: string,
    @Body() user: UpdateUserDto,
    @Request() req: any,
  ) {
    const payload = req.user;
    if (payload.username == username)
      return this.userService.updateUser(username, user);
    else throw new HttpException("Don't have access", HttpStatus.BAD_REQUEST);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':username')
  async deleteUser(@Param('username') username: string, @Request() req: any) {
    if (username == req.user.username) {
      this.userService.deleteUser(username);
    }
  }
}
