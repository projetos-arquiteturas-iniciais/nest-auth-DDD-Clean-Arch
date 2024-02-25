import { InternalServerError } from '@shared/domain/errors';
import { dataSource } from '@shared/infra/database';

export const initializeDatabaseConnection = async () => {
  try {
    await dataSource.initialize();
    console.log('Connection initialized with database...');
  } catch (error) {
    console.log(error);
    throw new InternalServerError('Error establishing a database connection.');
  }
};
