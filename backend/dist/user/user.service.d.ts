import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/updateUserDto';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<UserEntity>);
    createUser(userDto: UserDto): Promise<import("typeorm").InsertResult>;
    getMyProfile(username: string): Promise<UserEntity>;
    getUserProfile(username: string): Promise<UserEntity>;
    updateUser(username: string, userDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    deleteUser(username: string): Promise<import("typeorm").DeleteResult>;
}
