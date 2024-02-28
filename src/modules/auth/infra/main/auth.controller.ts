import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { UserUseCasesFactory } from '@users/application/usecases';
import { CreateUserDTO } from '@auth/infra/main/dtos';

@Controller('auth')
export class AuthController {
  @Post('sign-up')
  @HttpCode(HttpStatus.CREATED)
  public signup(@Body() body: CreateUserDTO) {
    const usecase = UserUseCasesFactory.createUser();

    return usecase.execute(body);
  }
}
