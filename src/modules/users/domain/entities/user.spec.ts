import { randomUUID } from 'node:crypto';
import { User, UserFactory } from '@users/domain/entities';
import { BadRequestError } from '@shared/domain/errors';

describe('User unit tests', () => {
  const id = randomUUID();
  const data = {
    id,
    name: 'Name',
    email: 'email@example.com',
    password: 'Test@123',
  };

  it('shoud create an user', () => {
    let user = new User(data);

    expect(user.id).toStrictEqual(id);
    expect(user.name).toStrictEqual('Name');
    expect(user.email).toStrictEqual('email@example.com');
    expect(user.password).toStrictEqual('Test@123');
    expect(user.toJSON()).toStrictEqual({
      id,
      name: 'Name',
      email: 'email@example.com',
      password: 'Test@123',
    });

    user = new User({ ...data, id: undefined, password: undefined });
    expect(user.password).toBeNull();
    expect(user.toJSON()).toStrictEqual({
      id: user.id,
      name: 'Name',
      email: 'email@example.com',
      password: null,
    });
  });

  describe('validation()', () => {
    it('shoud validate id correctly when create an user', () => {
      expect(
        () =>
          new User({
            ...data,
            id: 'dsdsdsdff',
          }),
      ).toThrow(new BadRequestError('id in invalid format'));
    });

    it('shoud validate name correctly when create an user', () => {
      expect(
        () =>
          new User({
            ...data,
            id: undefined,
            name: 'N',
          }),
      ).toThrow(new BadRequestError('name must contain at least 2 characters'));
      expect(
        () =>
          new User({
            ...data,
            name: undefined,
          }),
      ).toThrow(new BadRequestError(`name is required`));
      expect(
        () =>
          new User({
            ...data,
            name: 'it is too big'.repeat(10),
          }),
      ).toThrow(
        new BadRequestError(`name must contain a maximum of 100 characters`),
      );
      expect(
        () =>
          new User({
            ...data,
            name: 10 as any,
          }),
      ).toThrow(new BadRequestError('name must be a string'));
    });

    it('shoud validate password correctly when create an user', () => {
      expect(
        () =>
          new User({
            ...data,
            password: null,
          }),
      ).not.toThrow();
      expect(
        () =>
          new User({
            ...data,
            password: 'test',
          }),
      ).toThrow(
        new BadRequestError('password must contain at least 6 characters'),
      );
    });
  });

  describe('UserFactory', () => {
    it('shoud create an user with factory', () => {
      const user = UserFactory.create(data);

      expect(user.id).toStrictEqual(id);
      expect(user.name).toStrictEqual('Name');
      expect(user.email).toStrictEqual('email@example.com');
      expect(user.password).toStrictEqual('Test@123');
      expect(user.toJSON()).toStrictEqual({
        id,
        name: 'Name',
        email: 'email@example.com',
        password: 'Test@123',
      });
    });
  });
});
