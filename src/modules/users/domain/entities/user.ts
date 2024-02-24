import { randomUUID } from 'node:crypto';
import { Email } from '@shared/velue-objects/email';

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
}
