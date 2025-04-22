import { Professional, ProfessionalRepository } from '@brutalbarber/core';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class ProfessionalPrisma implements ProfessionalRepository {
  constructor(private readonly prisma: PrismaService) {}
  getAll(): Promise<Professional[]> {
    return this.prisma.professional.findMany();
  }
}
