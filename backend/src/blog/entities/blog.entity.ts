import { UserEntity } from 'src/user/entities/user.entity';
import {
  Entity,
  ManyToOne,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'blogs' })
export class BlogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.blogs)
  @JoinColumn({ name: 'created_by' })
  createdBy: string;
}
