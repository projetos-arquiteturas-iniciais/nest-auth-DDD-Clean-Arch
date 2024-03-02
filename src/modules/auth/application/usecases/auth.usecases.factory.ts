import { GenerateSigninToken, Signin } from '@auth/application/usecases';
import { DefaultUseCase } from '@shared/domain/usecases';
import { IUserRepository } from '@users/domain/repositories';
import { IHasher } from '@shared/domain/crypto';
import { userRepositoryFactory } from '@users/infra/data/repositories';
import { hasherFactory } from '@shared/infra/crypto/hasher';
import { IJsonWebToken, JwtFactory } from '@shared/infra/jwt';

export class AuthUseCasesFactory {
  public static signin(): DefaultUseCase {
    const repo: IUserRepository = userRepositoryFactory();
    const hasher: IHasher = hasherFactory();

    return new Signin.UseCase(repo, hasher);
  }

  public static generateSigninToken(): DefaultUseCase {
    const jsonWebToken: IJsonWebToken = JwtFactory.create();

    return new GenerateSigninToken.UseCase(jsonWebToken);
  }
}
