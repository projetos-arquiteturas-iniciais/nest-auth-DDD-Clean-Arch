import { DataSource, DataSourceOptions } from 'typeorm';
import { envConfigFactory } from '@shared/infra/env';
import { IEnvConfig } from '@shared/domain/env';

const envConfig: IEnvConfig = envConfigFactory();
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: envConfig.getDbHost(),
  port: envConfig.getDBPort(),
  username: envConfig.getDbUserName(),
  password: envConfig.getDbPassword(),
  database: envConfig.getDbName(),
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/modules/shared/infra/database/migrations/*{.ts,.js}'],
  synchronize: false,
};

export const dataSource = new DataSource(dataSourceOptions);
