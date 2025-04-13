import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { DbModule } from 'src/db/db.module';
import { BcryptProvider } from './bcrypt.provider';
import UserRepository from './user.prisma';
import { AuthMiddleware } from './auth.middleware';
import UserPrisma from './user.prisma';

@Module({
  imports: [DbModule],
  controllers: [AuthController],
  providers: [UserRepository, BcryptProvider, AuthMiddleware, UserPrisma],
  exports: [AuthMiddleware, UserPrisma],
})
export class AuthModule {}
