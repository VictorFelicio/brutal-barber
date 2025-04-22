import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { ServicePrisma } from './service.prisma';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [ServiceController],
  providers: [ServicePrisma],
})
export class ServiceModule {}
