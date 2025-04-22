import { Controller, Get } from '@nestjs/common';
import { ServicePrisma } from './service.prisma';

@Controller('service')
export class ServiceController {
  constructor(private readonly repo: ServicePrisma) {}
  @Get()
  getAllService() {
    return this.repo.getAll();
  }
}
