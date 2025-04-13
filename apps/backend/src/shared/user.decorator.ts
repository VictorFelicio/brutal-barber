import { createParamDecorator, ExecutionContext } from '@nestjs/common';

const UserLogged = createParamDecorator((_: unknown, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();
  return req.user;
});

export { UserLogged };
