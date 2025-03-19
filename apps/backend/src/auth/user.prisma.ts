import { Injectable } from '@nestjs/common';
import { User, UserRepository } from '@brutalbarber/core';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export default class UserPrisma implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}
  async save(user: User): Promise<void> {
    await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password ?? '',
        phone: user.phone ?? '',
        barber: user.barber ?? false,
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }
}
