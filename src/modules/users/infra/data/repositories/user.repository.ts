import { UserEntity } from '@users/infra/data/entities/user.entity';
import { User, UserFactory, UserProps } from '@users/domain/entities';
import { IUserRepository } from '@users/domain/repositories';
import { DataSource, Repository } from 'typeorm';

export class UserRepository implements IUserRepository {
  public static instance: UserRepository | null = null;
  public userRepo: Repository<UserEntity>;

  private constructor(protected readonly dataSource: DataSource) {
    this.userRepo = dataSource.getRepository(UserEntity);
  }

  public static createInstance(dataSource: DataSource): UserRepository {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository(dataSource);
    }

    return this.instance;
  }

  public async create(data: UserProps): Promise<User> {
    const createdEntity = this.userRepo.create(data);
    const savedEntity = await this.userRepo.save(createdEntity);

    return UserFactory.create(savedEntity);
  }
}
