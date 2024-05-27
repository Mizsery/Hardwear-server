import jwt from 'jsonwebtoken';
import { prisma } from '../prisma';

class TokenService {
  generateTokens(payload: Record<string, unknown>) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY as string, {
      expiresIn: '20s'
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY as string, {
      expiresIn: '30d'
    });

    return { accessToken, refreshToken };
  }

  async saveToken(userId: User['id'], refreshToken: Token['refreshToken']) {
    const tokenData = await prisma.token.findUnique({ where: { userId } });

    if (tokenData) {
      return prisma.token.update({ where: { userId }, data: { refreshToken } });
    }

    return prisma.token.create({ data: { userId, refreshToken } });
  }

  validateAccessToken(token: string) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_KEY as string);
      return userData as userDto;
    } catch (error) {
      return null;
    }
  }

  validateRefreshToken(refreshToken: Token['refreshToken']) {
    try {
      const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY as string);
      return userData as userDto;
    } catch (error) {
      return null;
    }
  }

  async findToken(refreshToken: Token['refreshToken']) {
    return prisma.token.findFirst({ where: { refreshToken } });
  }

  async removeToken(refreshToken: Token['refreshToken']) {
    const tokenId = await prisma.token.findFirst({ where: { refreshToken } });
    await prisma.token.delete({ where: { id: tokenId?.id } });
  }
}

export const tokenService = new TokenService();
