import { User } from '@brutalbarber/core';
import { Controller, Get, Post } from '@nestjs/common';
import { UserLogged } from 'src/shared/user.decorator';

@Controller('scheduling')
export class SchedulingController {
  @Post()
  @Get()
  teste(@UserLogged() user: User) {
    return `Agendamento para ${user.name}`;
  }
}
