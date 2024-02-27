import { DefaultUseCase } from '@shared/domain/usecases';
import { CreateUser } from '@users/application/usecases';
import { IHasher } from '@shared/domain/crypto';
import { IUserRepository } from '@users/domain/repositories';
import { userRepositoryFactory } from '@users/infra/data/repositories';
import { hasherFactory } from '@shared/infra/crypto/hasher';

export class UserUseCasesFactory {
  public static createUser(): DefaultUseCase {
    const repo: IUserRepository = userRepositoryFactory();
    const hasher: IHasher = hasherFactory();

    return new CreateUser.UseCase(repo, hasher);
  }
}
