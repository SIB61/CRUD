import { AuthEntity } from 'src/auth/entities/auth.entity';
import { CredentialEntity } from 'src/auth/entities/credential.entity';
import { BlogEntity } from 'src/blog/entities/blog.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
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

  @OneToOne(
    () => CredentialEntity,
    (credential: CredentialEntity) => {
      credential.user;
    },
  )
  @JoinColumn({ name: 'username' })
  credential: CredentialEntity;
}
