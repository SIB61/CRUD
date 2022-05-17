import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}
  async register(createUserDto: CreateUserDto) {
    let user: UserEntity = new UserEntity();
    user.username = createUserDto.username;
    user.email = createUserDto.email;
    user.firstName = createUserDto.firstname;
    user.lastName = createUserDto.lastname;
    user.passwordHash = await hash(createUserDto.password, 8);
    return this.userRepo.save(user);
  }
}
