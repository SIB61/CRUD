import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class CredentialEntity {
  @PrimaryColumn({ type: 'varchar', length: 20 })
  username: string;

  @Column({ name: 'password_hash', nullable: false })
  passwordHash: string;

  @OneToOne(
    () => UserEntity,
    (user: UserEntity) => {
      user.credential;
    },
  )
  user: UserEntity;
}
