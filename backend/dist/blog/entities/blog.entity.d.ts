import { UserEntity } from 'src/user/entities/user.entity';
export declare class BlogEntity {
    id: number;
    title: string;
    content: string;
    createdBy: UserEntity;
}
