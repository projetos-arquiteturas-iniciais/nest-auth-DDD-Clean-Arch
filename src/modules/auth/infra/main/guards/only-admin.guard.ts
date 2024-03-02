import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { Observable } from 'rxjs';
import { ForbiddenError } from '@shared/domain/errors';

@Injectable()
export class OnlyAdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request?.user;

    if (!user || !user['isAdmin']) {
      throw new ForbiddenError('Access denied');
    }

    return true;
  }
}
