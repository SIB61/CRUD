import { UserEntity } from 'src/user/entities/user.entity';
export declare class CredentialEntity {
    username: string;
    passwordHash: string;
    user: UserEntity;
}
