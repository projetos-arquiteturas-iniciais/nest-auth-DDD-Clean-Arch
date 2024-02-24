import { BadRequestError } from '../errors';
import { Validator } from '../validations';

export class Email {
  private _email: string;

  constructor(email: string) {
    this._email = email;
    this.validation();
  }

  get value(): string {
    return this._email;
  }

  private validation(): void {
    const isValid = Validator.isEmail(this._email);

    if (!isValid) {
      throw new BadRequestError('email in invalid format');
    }
  }
}
