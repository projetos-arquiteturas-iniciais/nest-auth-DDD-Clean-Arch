import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { LocalStrategy } from '@auth/infra/main/strategies';

@Module({
  controllers: [AuthController],
  providers: [LocalStrategy],
})
export class AuthModule {}
