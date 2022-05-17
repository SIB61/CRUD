import { BlogEntity } from 'src/blog/entities/blog.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @Column({ name: 'first_name', type: 'varchar', length: 30, nullable: false })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 30, nullable: false })
  lastName: string;

  @PrimaryColumn()
  username: string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 40,
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    name: 'password_hash',
    nullable: false,
  })
  passwordHash: string;

  @CreateDateColumn({ name: 'created_at', nullable: true })
  registeredAt: string;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt: string;

  @OneToMany(
    () => BlogEntity,
    (blog: BlogEntity) => {
      blog.createdBy;
    },
  )
  blogs: BlogEntity[];
}
