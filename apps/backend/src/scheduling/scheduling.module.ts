import { MiddlewareConsumer, Module } from '@nestjs/common';
import { SchedulingController } from './scheduling.controller';
import { AuthModule } from 'src/auth/auth.module';
import { AuthMiddleware } from 'src/auth/auth.middleware';

@Module({
  imports: [AuthModule],
  controllers: [SchedulingController],
})
export class SchedulingModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(SchedulingController);
  }
}
