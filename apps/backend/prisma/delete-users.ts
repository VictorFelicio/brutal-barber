import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteUsers() {
  const deleted = await prisma.user.deleteMany();
  console.log(`Usuários deletados: ${deleted.count}`);
}

deleteUsers()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
