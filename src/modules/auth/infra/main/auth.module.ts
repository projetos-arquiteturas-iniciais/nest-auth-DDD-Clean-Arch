import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { JwtStrategy, LocalStrategy } from '@auth/infra/main/strategies';

@Module({
  controllers: [AuthController],
  providers: [LocalStrategy, JwtStrategy],
})
export class AuthModule {}
