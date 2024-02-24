export class Email {
  private _email: string;

  constructor(email: string) {
    this._email = email;
  }

  get value(): string {
    return this._email;
  }
}
