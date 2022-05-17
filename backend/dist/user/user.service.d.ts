import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { UserEntity } from './entities/user.entity';
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<UserEntity>);
    register(createUserDto: CreateUserDto): Promise<UserEntity>;
}
