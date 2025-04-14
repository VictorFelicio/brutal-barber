import { User } from '@brutalbarber/core';
import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import UserPrisma from './user.prisma';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly repo: UserPrisma) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '');

      if (!token) {
        throw new HttpException('Token não informado', 401);
      }

      const payload = jwt.verify(token, process.env.JWT_SECRET!) as User;

      if (!payload || !payload.email) {
        throw new HttpException('Token inválido', 401);
      }

      const user = await this.repo.findByEmail(payload.email);

      if (!user) {
        throw new HttpException('Usuário não encontrado', 401);
      }
      delete user.password;
      (req as any).user = user;
      next();
    } catch (error: unknown) {
      if (
        error instanceof jwt.JsonWebTokenError ||
        error instanceof jwt.TokenExpiredError
      ) {
        throw new HttpException('Token inválido', 401);
      }

      if (error instanceof Error) {
        throw new HttpException(error.message, 401);
      }

      throw new HttpException('Erro desconhecido', 500);
    }
  }
}
