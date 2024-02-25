import { User, UserProps } from '@users/domain/entities';
import { ICreate, IEmailExists } from '@shared/domain/repositories';

export interface IUserRepository<T = User>
  extends ICreate<T, UserProps>,
    IEmailExists {}
