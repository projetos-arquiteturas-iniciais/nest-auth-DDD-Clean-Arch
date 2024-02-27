import { hash, compare } from 'bcrypt';
import { IHasher } from '@shared/domain/crypto';

export class BcryptAdapter implements IHasher {
  public hash(data: string | Buffer): Promise<string> {
    return hash(data, 12);
  }

  public compare(data: string | Buffer, encrypted: string): Promise<boolean> {
    return compare(data, encrypted);
  }
}
