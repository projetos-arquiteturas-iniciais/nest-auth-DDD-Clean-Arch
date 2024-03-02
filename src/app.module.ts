import { Module } from '@nestjs/common';

import { UsersModule } from '@users/infra/main';
import { AuthModule } from '@auth/infra/main';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '@auth/infra/main/guards';

@Module({
  imports: [UsersModule, AuthModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
