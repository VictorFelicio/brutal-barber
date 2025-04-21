import { Module } from '@nestjs/common';
import { ProfessionalController } from './professional.controller';
import { ProfessionalPrisma } from './professional.prisma';

@Module({
  controllers: [ProfessionalController],
  providers: [ProfessionalPrisma],
})
export class ProfessionalModule {}
