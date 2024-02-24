import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envConfigFactory } from '@shared/infra/env';

const envConfig = envConfigFactory();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(envConfig.getAppPort() || 3001);
}
bootstrap();
