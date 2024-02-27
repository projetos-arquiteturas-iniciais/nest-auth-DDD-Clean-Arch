import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { CreateUserDTO } from '@users/infra/main/dtos';
import { UserUseCasesFactory } from '@users/application/usecases';

@Controller('users')
export class UsersController {
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  public create(@Body() data: CreateUserDTO) {
    const useCase = UserUseCasesFactory.createUser();

    return useCase.execute(data);
  }
}
