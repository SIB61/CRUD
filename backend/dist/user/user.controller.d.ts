import { UpdateUserDto } from './dto/updateUserDto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    register(user: UserDto): Promise<import("typeorm").InsertResult>;
    getUser(username: string, req: any): Promise<import("./entities/user.entity").UserEntity>;
    updateUser(username: string, user: UpdateUserDto, req: any): Promise<import("typeorm").UpdateResult>;
    deleteUser(username: string, req: any): Promise<void>;
}
