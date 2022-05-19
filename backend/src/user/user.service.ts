import { HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/updateUserDto';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}
  async createUser(userDto: UserDto) {
    let userEntity: UserEntity = new UserEntity();
    userEntity.username = userDto.username;
    userEntity.email = userDto.email;
    userEntity.firstName = userDto.firstname;
    userEntity.lastName = userDto.lastname;
    userEntity.passwordHash = await hash(userDto.password, 8);
    return this.userRepo.save(userEntity);
  }
  async getMyProfile(username: string): Promise<UserEntity> {
    const user = await this.userRepo.findOne(username);
    if (user) return user;
    else throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async getUserProfile(username: string) {
    const user = await this.userRepo.findOne(username, {
      select: ['username', 'firstName', 'lastName'],
    });
    if (user) return user;
    else throw new HttpException('User not fount', HttpStatus.NOT_FOUND);
  }

  async updateUser(username: string, userDto: UpdateUserDto) {
    //userEntity.passwordHash = await hash(userDto.password, 8);
    let userEntity = this.userRepo.create({
      firstName: userDto.firstname,
      lastName: userDto.lastname,
      email: userDto.email,
    });
    return this.userRepo.update(username, userEntity);
  }
}
