export interface IEnvConfig {
  getAppPort(): number;
  getNodeEnv(): string;
  getDbHost(): string;
  getDBPort(): number;
  getDbUserName(): string;
  getDbPassword(): string;
  getDbName(): string;
  getSecretKeyToken(): string;
}
