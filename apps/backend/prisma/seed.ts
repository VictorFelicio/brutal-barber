import { professionals, services, User } from '@brutalbarber/core';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function seed() {
  console.log('Criando novos profissionais...');
  await prisma.professional.createMany({ data: professionals as any });
  console.log('Profissionais criados com sucesso...');

  console.log('Criando novos servicos...');
  await prisma.service.createMany({ data: services as any });
  console.log('Servicos criados com sucesso...');

  console.log('Criando novos usuários...');
  const defaultPassword = 'senha123';
  const password = await bcrypt.hash(defaultPassword, 10);

  const users: User[] = [
    {
      name: 'João Silva',
      email: 'joao@email.com',
      password,
      phone: '1996969-6969',
      barber: false,
    },
    {
      name: 'Maria Oliveira',
      email: 'maria@email.com',
      password,
      phone: '1996969-6969',
      barber: false,
    },
    {
      name: 'José Santos',
      email: 'jose@email.com',
      password,
      phone: '1996969-6969',
      barber: false,
    },
    {
      name: 'Ana Costa',
      email: 'ana@email.com',
      password,
      phone: '1996969-6969',
      barber: false,
    },
    {
      name: 'Carlos Pereira',
      email: 'carlos@email.com',
      password,
      phone: '1996969-6969',
      barber: false,
    },
    {
      name: 'João Felicio',
      email: 'felicio@email.com',
      password,
      phone: '1996969-6969',
      barber: true,
    },
  ];

  await prisma.user.createMany({ data: users as any });
}

async function main() {
  try {
    await seed();
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

void main();
