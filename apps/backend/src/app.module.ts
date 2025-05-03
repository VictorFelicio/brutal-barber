import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { SchedulingModule } from './scheduling/scheduling.module';
import { ProfessionalModule } from './professional/professional.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    AuthModule,
    DbModule,
    SchedulingModule,
    ProfessionalModule,
    ServiceModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
