import { UserEntity } from '@users/infra/data/entities/user.entity';
import { IUser, UserFactory } from '@users/domain/entities';
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

  public async create(data: IUser): Promise<IUser> {
    const createdEntity = this.userRepo.create(data.toJSON());
    const savedEntity = await this.userRepo.save(createdEntity);

    return UserFactory.create(savedEntity);
  }

  public async emailExists(email: string): Promise<boolean> {
    const user = await this.userRepo.findOne({
      where: { email: email },
    });

    return !!user;
  }
}
