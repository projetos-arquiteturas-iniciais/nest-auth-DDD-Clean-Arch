import { dataSourceTest } from '@shared/infra/database';
import { UserRepository } from './user.repository';
import { IUserRepository } from '@users/domain/repositories';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities';
import { User } from '@users/domain/entities';
import { randomUUID } from 'node:crypto';

describe('UserRepository integration tests', () => {
  let sut: IUserRepository;
  let userRepo: Repository<UserEntity>;
  const id = randomUUID();
  const data = {
    id,
    name: 'Name',
    email: 'email@example.com',
    password: 'Test@123',
  };

  beforeAll(async () => {
    try {
      await dataSourceTest.initialize();
      console.log('Connection initialized with database...');
      sut = UserRepository.createInstance(dataSourceTest);
      userRepo = dataSourceTest.getRepository(UserEntity);
    } catch (error) {
      console.log(error);
    }
  });

  afterEach(async () => {
    await userRepo.clear();
  });

  it(`the sut and mockDataSource should be defined`, () => {
    expect(sut).toBeDefined();
  });

  describe('create', () => {
    it(`should create an user`, async () => {
      const result = await sut.create(data);

      expect(result).toBeInstanceOf(User);
      expect(result.id).toStrictEqual(id);
      expect(result.name).toStrictEqual('Name');
      expect(result.email).toStrictEqual('email@example.com');
      expect(result.password).toStrictEqual('Test@123');
    });
  });
});
