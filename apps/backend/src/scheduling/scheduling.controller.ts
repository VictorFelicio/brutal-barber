import {
  FindSchedulingByClient,
  IScheduling,
  NewScheduling,
  User,
} from '@brutalbarber/core';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserLogged } from 'src/shared/user.decorator';
import SchedulingPrisma from './scheduling.prisma';

@Controller('scheduling')
export class SchedulingController {
  constructor(private readonly repository: SchedulingPrisma) {}

  @Post()
  async newScheduling(
    @Body() scheduling: IScheduling,
    @UserLogged() user: User,
  ) {
    const newSchedulingUseCase = new NewScheduling(this.repository);
    await newSchedulingUseCase.execute({ scheduling, user });
  }

  @Get()
  async findSchedulingByClient(@UserLogged() user: User) {
    const findSchedulingByClientUseCase = new FindSchedulingByClient(
      this.repository,
    );
    return await findSchedulingByClientUseCase.execute(user);
  }
}
