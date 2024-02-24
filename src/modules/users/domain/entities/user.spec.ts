import { randomUUID } from 'node:crypto';
import { User } from '@users/domain/entities';

describe('User unit tests', () => {
  it('shoud create an user', () => {
    const id = randomUUID();
    const user = new User({
      id,
      name: 'Name',
      email: 'email@example.com',
      password: 'password',
    });

    expect(user.id).toStrictEqual(id);
    expect(user.name).toStrictEqual('Name');
    expect(user.email).toStrictEqual('email@example.com');
    expect(user.password).toStrictEqual('password');
    expect(user.toJSON()).toStrictEqual({
      id,
      name: 'Name',
      email: 'email@example.com',
      password: 'password',
    });
  });
});
