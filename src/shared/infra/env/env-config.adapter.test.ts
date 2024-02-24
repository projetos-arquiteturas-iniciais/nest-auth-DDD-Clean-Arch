import { envConfigFactory } from '@shared/infra/env';
import { IEnvConfig } from '@shared/domain/env';

describe('EnvConfig integration tests', () => {
  let sut: IEnvConfig;

  beforeEach(() => {
    sut = envConfigFactory();
  });

  it('should return the enviroment PORT', async () => {
    const result = sut.getAppPort();

    expect(result).toStrictEqual(3001);
  });

  it('should return the enviroment NODE_ENV', async () => {
    const result = sut.getNodeEnv();

    expect(result).toStrictEqual('test');
  });
});
