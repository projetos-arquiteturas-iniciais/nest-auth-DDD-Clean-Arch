import { Module } from '@nestjs/common';

import { UsersModule } from '@users/infra/main';
import { AuthModule } from '@auth/infra/main';

@Module({
  imports: [UsersModule, AuthModule],
})
export class AppModule {}
