import { User, UserProps } from '@users/domain/entities';
import { ICreate } from '@shared/domain/repositories';

export interface IUserRepository<T = User> extends ICreate<T, UserProps> {}
