import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { log } from 'console';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { TokenDto } from './dto/token.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async authenticate(username: string, password: string): Promise<any> {
    let user: UserEntity = await this.userRepo.findOne(username);
    if (user) {
      let isValid: boolean = await compare(password, user.passwordHash);
      if (isValid) {
        const { passwordHash, ...result } = user;
        return result;
      }
    }
    throw new HttpException('Invalid Credential', HttpStatus.BAD_REQUEST);
  }

  async login(username: string, password: string) {
    let user: UserEntity = await this.authenticate(username, password);
    if (user != null) {
      const token: TokenDto = { username: user.username, email: user.email };
      return {
        access_token: this.jwtService.sign(token),
      };
    }
    throw new HttpException('Invalid Credential', HttpStatus.UNAUTHORIZED);
  }
}
