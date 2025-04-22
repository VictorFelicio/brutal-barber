import { Controller, Get } from '@nestjs/common';
import { ProfessionalPrisma } from './professional.prisma';
import { GetProfessionals } from '@brutalbarber/core';

@Controller('professional')
export class ProfessionalController {
  constructor(private readonly repo: ProfessionalPrisma) {}

  @Get()
  getAllProfessionals() {
    const useCase = new GetProfessionals(this.repo);
    return useCase.execute();
  }
}
