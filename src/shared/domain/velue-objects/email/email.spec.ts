import { Email } from './email';
import { BadRequestError } from '@shared/domain/errors';

describe('Email unit tests', () => {
  it('shoud create an email', () => {
    const email = new Email('email@example.com');

    expect(email.value).toStrictEqual('email@example.com');
  });

  it('should throw a BadRequestError email is invalid', () => {
    expect(() => new Email('@dsf.com')).toThrow(
      new BadRequestError(`email in invalid format`),
    );
    expect(() => new Email('ssdwd.com')).toThrow(
      new BadRequestError(`email in invalid format`),
    );
    expect(() => new Email('swddw@')).toThrow(
      new BadRequestError(`email in invalid format`),
    );
    expect(() => new Email('dsa@defew')).toThrow(
      new BadRequestError(`email in invalid format`),
    );
    expect(() => new Email('N@de.co')).toThrow(
      new BadRequestError('email must contain at least 8 characters'),
    );
    expect(() => new Email('ddsd@dsds')).toThrow(
      new BadRequestError('email in invalid format'),
    );
    expect(
      () =>
        new Email('itistoobig'.repeat(5) + '@' + 'teste'.repeat(10) + '.com'),
    ).toThrow(
      new BadRequestError(`email must contain a maximum of 100 characters`),
    );
  });
});
