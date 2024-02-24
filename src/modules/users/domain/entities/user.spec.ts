import { randomUUID } from 'node:crypto';
import { User } from '@users/domain/entities';
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
    const user = new User(data);

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

    it('shoud validate email correctly when create an user', () => {
      expect(
        () =>
          new User({
            ...data,
            email: 'N@de.co',
          }),
      ).toThrow(
        new BadRequestError('email must contain at least 8 characters'),
      );
      expect(
        () =>
          new User({
            ...data,
            email: 'ddsd@dsds',
          }),
      ).toThrow(new BadRequestError('email in invalid format'));
      expect(
        () =>
          new User({
            ...data,
            email: 'itistoobig'.repeat(5) + '@' + 'teste'.repeat(10) + '.com',
          }),
      ).toThrow(
        new BadRequestError(`email must contain a maximum of 100 characters`),
      );
    });

    it('shoud validate password correctly when create an user', () => {
      expect(
        () =>
          new User({
            ...data,
            password: 'test@123',
          }),
      ).toThrow(new BadRequestError(`weak password`));
      expect(
        () =>
          new User({
            ...data,
            password: 'Test@sd',
          }),
      ).toThrow(new BadRequestError(`weak password`));
      expect(
        () =>
          new User({
            ...data,
            password: 'test123',
          }),
      ).toThrow(new BadRequestError(`weak password`));
      expect(
        () =>
          new User({
            ...data,
            password: 'Ts@13',
          }),
      ).toThrow(new BadRequestError(`weak password`));
    });
  });
});
