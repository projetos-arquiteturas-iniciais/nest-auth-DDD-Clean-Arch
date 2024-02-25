import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptionsTest: DataSourceOptions = {
  type: 'sqlite',
  database: ':memory:',
  entities: ['src/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export const dataSourceTest = new DataSource(dataSourceOptionsTest);
