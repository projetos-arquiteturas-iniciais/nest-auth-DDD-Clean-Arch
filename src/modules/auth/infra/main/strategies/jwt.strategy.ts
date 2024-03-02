import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';
import { envConfigFactory } from '@shared/infra/env';
import { GenerateSigninToken } from '@auth/application/usecases';

const envConfig = envConfigFactory();

type Payload = GenerateSigninToken.UserPayload & {
  id: string;
};
type ReturnedPayload = Omit<Payload, 'iat' | 'exp' | 'sub'>;

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: envConfig.getSecretKeyToken(),
    });
  }

  public async validate(payload: Payload): Promise<ReturnedPayload> {
    return {
      id: payload['sub'],
      email: payload['email'],
      isAdmin: payload['isAdmin'],
      name: payload['name'],
    };
  }
}
