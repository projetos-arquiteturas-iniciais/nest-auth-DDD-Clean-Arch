import { IEnvConfig } from '@shared/domain/env';
import { config } from 'dotenv';

config();

export class EnvConfig implements IEnvConfig {
  getAppPort(): number {
    return Number(process?.env?.PORT);
  }

  getNodeEnv(): string {
    return process?.env?.NODE_ENV?.toString();
  }

  getDbHost(): string {
    return process?.env?.DATABASE_HOST?.toString();
  }

  getDBPort(): number {
    return Number(process?.env?.DATABASE_PORT);
  }
}