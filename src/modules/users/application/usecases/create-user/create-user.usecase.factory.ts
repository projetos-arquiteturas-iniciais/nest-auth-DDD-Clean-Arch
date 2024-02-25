import { CreateUserUseCase } from '@users/application/usecases';
import { IHasher } from '@shared/domain/crypto';
import { IUserRepository } from '@users/domain/repositories';
import { bcryptFactory } from '@shared/infra/crypto/hasher';
import { userRepositoryFactory } from '@users/infra/data/repositories';

export const createUserUseCaseFactory = (): CreateUserUseCase.UseCase => {
  const repo: IUserRepository = userRepositoryFactory();
  const hasher: IHasher = bcryptFactory();

  return new CreateUserUseCase.UseCase(repo, hasher);
};
