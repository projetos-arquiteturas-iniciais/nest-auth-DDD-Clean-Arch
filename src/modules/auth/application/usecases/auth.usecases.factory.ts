import { GenerateSigninToken, Signin } from '@auth/application/usecases';
import { DefaultUseCase } from '@shared/domain/usecases';
import { IUserRepository } from '@users/domain/repositories';
import { IHasher } from '@shared/domain/crypto';
import { userRepositoryFactory } from '@users/infra/data/repositories';
import { hasherFactory } from '@shared/infra/crypto/hasher';
import { IJsonWebToken, JwtFactory } from '@shared/infra/jwt';

export class AuthUseCasesFactory {
  public static readonly repo: IUserRepository = userRepositoryFactory();
  public static readonly hasher: IHasher = hasherFactory();
  public static readonly jsonWebToken: IJsonWebToken = JwtFactory.create();

  public static signin(): DefaultUseCase {
    return new Signin.UseCase(this.repo, this.hasher);
  }

  public static generateSigninToken(): DefaultUseCase {
    return new GenerateSigninToken.UseCase(this.jsonWebToken);
  }
}
