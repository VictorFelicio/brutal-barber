import { IScheduling, ISchedulingRepository } from '@brutalbarber/core';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export default class SchedulingPrisma implements ISchedulingRepository {
  //
  constructor(private readonly prisma: PrismaService) {}

  async create(scheduling: IScheduling): Promise<void> {
    await this.prisma.scheduling.create({
      data: {
        date: scheduling.date,
        user: { connect: { id: scheduling.user.id } },
        professional: { connect: { id: scheduling.professional.id } },
        services: {
          connect: scheduling.services.map((service) => ({ id: service.id })),
        },
      },
    });
  }

  async findByEmailUser(email: string): Promise<IScheduling[]> {
    const scheduling = await this.prisma.scheduling.findMany({
      where: {
        user: { email },
        date: { gte: new Date() },
      },
      include: {
        user: { select: { id: true, name: true, email: true } },
        professional: { select: { id: true, name: true } },
        services: {
          select: { id: true, name: true, price: true, qtySlots: true },
        },
      },
      orderBy: { date: 'desc' },
    });

    return scheduling.map(
      ({ userId: _userId, professionalId: _professionalId, ...schedule }) =>
        schedule,
    );
  }

  async findByProfessionalAndDate(
    professional: number,
    date: Date,
  ): Promise<IScheduling[]> {
    const year = date.getFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();

    const startDate = new Date(year, month, day, 0, 0, 0);
    const endDate = new Date(year, month, day, 23, 59, 59);

    return await this.prisma.scheduling.findMany({
      where: {
        professionalId: professional,
        date: { gte: startDate, lte: endDate },
      },
      include: {
        user: true,
        professional: true,
        services: true,
      },
    });
  }

  async findById(id: number): Promise<IScheduling | null> {
    return await this.prisma.scheduling.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
        professional: true,
        services: true,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.scheduling.delete({
      where: {
        id,
      },
      include: {
        services: true,
      },
    });
  }
}
