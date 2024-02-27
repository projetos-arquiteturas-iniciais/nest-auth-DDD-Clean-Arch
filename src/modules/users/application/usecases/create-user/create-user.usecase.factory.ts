import { CreateUserUseCase } from '@users/application/usecases';
import { IHasher } from '@shared/domain/crypto';
import { IUserRepository } from '@users/domain/repositories';
import { userRepositoryFactory } from '@users/infra/data/repositories';
import { hasherFactory } from '@shared/infra/crypto/hasher';

export const createUserUseCaseFactory = (): CreateUserUseCase.UseCase => {
  const repo: IUserRepository = userRepositoryFactory();
  const hasher: IHasher = hasherFactory();

  return new CreateUserUseCase.UseCase(repo, hasher);
};
