import { UserRepository } from '@users/infra/data/repositories';
import { IUserRepository } from '@users/domain/repositories';
import { dataSource } from '@shared/infra/database';

export const userRepositoryFactory = (): IUserRepository => {
  return UserRepository.createInstance(dataSource);
};
