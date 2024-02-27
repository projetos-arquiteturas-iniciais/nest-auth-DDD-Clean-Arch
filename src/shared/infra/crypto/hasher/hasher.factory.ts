import { IHasher } from '@shared/domain/crypto';
import { BcryptAdapter } from '@shared/infra/crypto/hasher';

export const hasherFactory = (): IHasher => {
  return new BcryptAdapter();
};
