import { Column, Entity } from 'typeorm';
import { UserProps } from '@users/domain/entities';
import { EntityTypeOrm } from '@shared/infra/database/entities';

@Entity('users')
export class UserEntity extends EntityTypeOrm implements UserProps {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;
}
