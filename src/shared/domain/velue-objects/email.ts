import { BadRequestError } from '../errors';
import { Validator } from '../validations';

export class Email {
  constructor(private email: string) {
    this.email = email;
    this.validation();
  }

  get value(): string {
    return this.email;
  }

  private validation(): void {
    const isValid = Validator.isEmail(this.email);

    if (!isValid) {
      throw new BadRequestError('email in invalid format');
    }
  }
}
