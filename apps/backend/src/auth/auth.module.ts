import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { DbModule } from 'src/db/db.module';
import { BcryptProvider } from './bcrypt.provider';
import UserRepository from './user.prisma';
import { AuthMiddleware } from './auth.middleware';

@Module({
  controllers: [AuthController],
  imports: [DbModule],
  providers: [UserRepository, BcryptProvider, AuthMiddleware],
  exports: [AuthMiddleware],
})
export class AuthModule {}
