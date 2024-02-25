import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { createUserUseCaseFactory } from '@users/application/usecases';
import { CreateUserDTO } from '@users/infra/main/dtos';

@Controller('users')
export class UsersController {
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  public create(@Body() data: CreateUserDTO) {
    const useCase = createUserUseCaseFactory();

    return useCase.execute(data);
  }
}
