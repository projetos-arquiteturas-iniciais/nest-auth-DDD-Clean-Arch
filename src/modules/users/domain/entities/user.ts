import { randomUUID } from 'node:crypto';
import { Email } from '@shared/domain/velue-objects/email';
import {
  MaxLengthFieldValidation,
  MinLengthFieldValidation,
  StrongPasswordValidation,
  UUIDValidation,
  Validation,
  ValidationComposite,
} from '@shared/domain/validations';

export type UserProps = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export class User {
  private _id: string;
  private _name: string;
  private _email: Email;
  private _password: string;

  constructor(props: UserProps) {
    this._id = props?.id || randomUUID();
    this._name = props.name;
    this._email = new Email(props.email);
    this._password = props.password;
    this.validation();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email.value;
  }

  get password(): string {
    return this._password;
  }

  public toJSON(): UserProps {
    return {
      id: this._id,
      name: this._name,
      email: this._email.value,
      password: this._password,
    };
  }

  private validation(): void {
    const validator = createValidator();
    const data = this.toJSON();
    validator.validate(data);
  }
}

function createValidator(): Validation<UserProps> {
  const validations: Validation<UserProps>[] = [
    new UUIDValidation('id'),

    new MinLengthFieldValidation('name', 2),
    new MaxLengthFieldValidation('name', 100),

    new StrongPasswordValidation('password'),
  ];

  return new ValidationComposite(validations);
}

export class UserFactory {
  public static create(props: UserProps): User {
    return new User(props);
  }
}
