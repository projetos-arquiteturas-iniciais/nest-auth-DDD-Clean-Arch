import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { envConfigFactory } from '@shared/infra/env';
import { globalExeptionFiltersFactory } from '@shared/infra/exception-filters';
import { initializeDatabaseConnection } from '@shared/infra/database';

const envConfig = envConfigFactory();
async function bootstrap() {
  await initializeDatabaseConnection();

  const app = await NestFactory.create(AppModule);
  globalExeptionFiltersFactory(app);

  await app.listen(envConfig.getAppPort() || 3001);
}
bootstrap();
