import { Body, Controller, Post } from '@nestjs/common';
import UserPrisma from './user.prisma';
import { RegisterUser, User, LoginUser } from '@brutalbarber/core';
import { BcryptProvider } from './bcrypt.provider';
import * as jwt from 'jsonwebtoken';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly repository: UserPrisma,
    private readonly crypt: BcryptProvider,
  ) {}

  @Post('login')
  async login(@Body() data: { email: string; password: string }) {
    const useCase = new LoginUser(this.repository, this.crypt);
    const user = await useCase.execute({
      email: data.email,
      password: data.password,
    });

    const secret = process.env.JWT_SECRET;

    if (!secret) throw new Error('JWT is not defined');

    return jwt.sign(user, secret, { expiresIn: '15d' });
  }

  @Post('register')
  async register(@Body() user: User) {
    const useCase = new RegisterUser(this.repository, this.crypt);
    await useCase.execute(user);
  }
}
