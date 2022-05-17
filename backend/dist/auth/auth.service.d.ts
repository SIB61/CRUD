import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private userRepo;
    private jwtService;
    constructor(userRepo: Repository<UserEntity>, jwtService: JwtService);
    authenticate(username: string, password: string): Promise<any>;
    login(username: string, password: string): Promise<{
        access_token: string;
    }>;
}
