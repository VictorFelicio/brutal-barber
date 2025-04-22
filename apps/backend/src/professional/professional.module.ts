import { Module } from '@nestjs/common';
import { ProfessionalController } from './professional.controller';
import { ProfessionalPrisma } from './professional.prisma';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [ProfessionalController],
  providers: [ProfessionalPrisma],
})
export class ProfessionalModule {}
