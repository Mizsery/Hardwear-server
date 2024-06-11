import { PrismaClient } from '@prisma/client';
import { categories, Products, sizes } from './data';
const prisma = new PrismaClient();

async function main() {
  for (let category of categories) {
    await prisma.categories.create({
      data: category
    });
  }

  for (let size of sizes) {
    await prisma.sizes.create({
      data: size
    });
  }

  for (let prod of Products) {
    await prisma.product.create({
      data: prod
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
