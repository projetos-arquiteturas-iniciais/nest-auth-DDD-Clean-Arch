import { IUser } from '@users/domain/entities';
import { ICreate, IEmailExists } from '@shared/domain/repositories';

export interface IUserRepository<T = IUser>
  extends ICreate<T, T>,
    IEmailExists {}
