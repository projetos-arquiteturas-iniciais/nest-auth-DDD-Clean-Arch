import { BadRequestError } from '../../errors';
import { Validator } from '../../validations';

export class Email {
  constructor(private readonly email: string) {
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

    if (this.email.length < 8) {
      throw new BadRequestError('email must contain at least 8 characters');
    }

    if (this.email.length > 100) {
      throw new BadRequestError(
        'email must contain a maximum of 100 characters',
      );
    }
  }
}
