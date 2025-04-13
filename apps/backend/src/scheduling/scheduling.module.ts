import { MiddlewareConsumer, Module } from '@nestjs/common';
import { SchedulingController } from './scheduling.controller';
import { AuthModule } from 'src/auth/auth.module';
import { AuthMiddleware } from 'src/auth/auth.middleware';
import UserPrisma from 'src/auth/user.prisma';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [AuthModule, DbModule],
  controllers: [SchedulingController],
  providers: [UserPrisma],
})
export class SchedulingModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(SchedulingController);
  }
}
