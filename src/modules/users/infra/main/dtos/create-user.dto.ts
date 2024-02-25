import { CreateUserUseCase } from '@users/application/usecases';

export class CreateUserDTO implements CreateUserUseCase.Input {
  name: string;
  email: string;
  password: string;
}
