import { BlogEntity } from 'src/blog/entities/blog.entity';
export declare class UserEntity {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    passwordHash: string;
    registeredAt: string;
    updatedAt: string;
    blogs: BlogEntity[];
}
