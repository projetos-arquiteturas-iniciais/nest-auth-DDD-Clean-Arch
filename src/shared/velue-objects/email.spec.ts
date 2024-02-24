import { Email } from './email';

describe('Email unit tests', () => {
  it('shoud create an email', () => {
    const email = new Email('email@example.com');

    expect(email.value).toStrictEqual('email@example.com');
  });
});
