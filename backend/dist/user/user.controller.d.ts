import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    register(user: CreateUserDto): Promise<import("./entities/user.entity").UserEntity>;
}
