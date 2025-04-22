import { Service, ServiceRepository } from '@brutalbarber/core';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class ServicePrisma implements ServiceRepository {
  constructor(private readonly prisma: PrismaService) {}
  getAll(): Promise<Service[]> {
    return this.prisma.service.findMany();
  }
}
