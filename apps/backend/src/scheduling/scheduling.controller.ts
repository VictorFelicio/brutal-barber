import {
  DeleteScheduling,
  FindSchedulingByClient,
  FindSchedulingProfessionalByDate,
  IScheduling,
  NewScheduling,
  User,
} from '@brutalbarber/core';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Get('/professional/:professional/:date')
  async findSchedulingByProfessionalAndDate(
    @Param('professional') professional: string,
    @Param('date') date: string,
  ) {
    const findSchedulingByProfessionalAndDateUseCase =
      new FindSchedulingProfessionalByDate(this.repository);
    return await findSchedulingByProfessionalAndDateUseCase.execute({
      professional: Number(professional),
      date: new Date(date),
    });
  }

  @Delete(':id')
  async deleteScheduling(@Param('id') id: string, @UserLogged() user: User) {
    const deleteSchedulingUseCase = new DeleteScheduling(this.repository);
    await deleteSchedulingUseCase.execute({ id: +id, user });
  }
}
