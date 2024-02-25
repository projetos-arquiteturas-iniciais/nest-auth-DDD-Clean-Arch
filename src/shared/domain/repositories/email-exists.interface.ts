import { Email } from '../velue-objects';

export interface IEmailExists {
  emailExists(email: Email): Promise<boolean>;
}
