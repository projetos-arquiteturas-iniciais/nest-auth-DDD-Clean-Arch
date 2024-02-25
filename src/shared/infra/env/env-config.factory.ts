import { IEnvConfig } from './../../domain/env';
import { EnvConfig } from './env-config.adapter';

export const envConfigFactory = (): IEnvConfig => {
  return new EnvConfig();
};
