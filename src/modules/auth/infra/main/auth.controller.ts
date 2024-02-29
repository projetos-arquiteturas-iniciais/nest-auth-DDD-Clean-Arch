import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';

import { CreateUserDTO } from '@auth/infra/main/dtos';
import { LocalAuthGuard } from '@auth/infra/main/guards';
import { UserUseCasesFactory } from '@users/application/usecases';

@Controller('auth')
export class AuthController {
  @Post('sign-up')
  @HttpCode(HttpStatus.CREATED)
  public signup(@Body() body: CreateUserDTO) {
    const usecase = UserUseCasesFactory.createUser();

    return usecase.execute(body);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  public async login() {}
}
