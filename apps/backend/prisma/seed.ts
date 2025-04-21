import { User } from '@brutalbarber/core';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function seed() {
  console.log('Criando novos usuários...');
  const senhaPadrao = 'senha123';
  const password = await bcrypt.hash(senhaPadrao, 10);

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

  await prisma.user.deleteMany();
  await prisma.user.createMany({ data: users as any });

  console.log('Usuários criados com sucesso!');
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
