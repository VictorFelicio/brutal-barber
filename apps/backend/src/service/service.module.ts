import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { ServicePrisma } from './service.prisma';

@Module({
  controllers: [ServiceController],
  providers: [ServicePrisma],
})
export class ServiceModule {}
