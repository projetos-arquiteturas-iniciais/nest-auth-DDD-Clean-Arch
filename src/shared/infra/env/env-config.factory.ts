import { EnvConfig } from '@shared/infra/env';
import { IEnvConfig } from '@shared/domain/env';

export const envConfigFactory = (): IEnvConfig => {
  return new EnvConfig();
};
