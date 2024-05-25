import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { prisma } from '../prisma';

class UserService {
  async signup({ email, name, password, phone }: User) {
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      throw new Error('Пользователь с такой почтой уже существует');
    }

    const hashedPassword = await bcrypt.hash(password, 3);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        phone
      }
    });

    return user;
  }
}

export const userService = new UserService();
