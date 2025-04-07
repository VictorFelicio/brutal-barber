import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { SchedulingModule } from './scheduling/scheduling.module';

@Module({
  imports: [AuthModule, DbModule, SchedulingModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
