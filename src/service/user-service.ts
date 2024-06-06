import bcrypt from 'bcrypt';
import { prisma } from '../prisma';
import { tokenService } from './token-service';
import { UserDto } from '../dtos/user-dto';
import { ApiError } from '../exception';

class UserService {
  async signup({ email, name, password, phone }: Omit<User, 'id'>) {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw ApiError.BadRequest('Пользователь с такой почтой уже существует');
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

    const userDto = UserDto(user);
    const tokens = tokenService.generateTokens(userDto);
    await tokenService.saveToken(user.id, tokens.refreshToken);

    return { user: userDto, ...tokens };
  }

  async login({ email, password }: Pick<User, 'email' | 'password'>) {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw ApiError.BadRequest('Неправильная почта или пароль');
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw ApiError.BadRequest('Неправильная почта или пароль');
    }

    const userDto = UserDto(user);
    const tokens = tokenService.generateTokens(userDto);
    await tokenService.saveToken(user.id, tokens.refreshToken);

    return { user: userDto, ...tokens };
  }

  async refresh({ refreshToken }: { refreshToken: Token['refreshToken'] }) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }

    const userFromDb = await prisma.user.findUnique({ where: { id: userData.id } });

    if (!userFromDb) {
      throw ApiError.UnauthorizedError();
    }

    const userDto = UserDto(userFromDb);
    const tokens = tokenService.generateTokens(userDto);
    await tokenService.saveToken(userFromDb.id, tokens.refreshToken);

    return { user: userDto, ...tokens };
  }

  async logout({ refreshToken }: { refreshToken: Token['refreshToken'] }) {
    return await tokenService.removeToken(refreshToken);
  }
}

export const userService = new UserService();
