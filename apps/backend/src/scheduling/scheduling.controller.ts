import { User } from '@brutalbarber/core';
import { Controller, Get } from '@nestjs/common';
import { UserLogged } from 'src/shared/user.decorator';

@Controller('scheduling')
export class SchedulingController {
  @Get()
  teste(@UserLogged() user: User) {
    return `Agendamento para ${user.name}`;
  }
}
