import { NextFunction, Request, Response } from 'express';
import { prisma } from '../prisma';
import { ApiError } from '../exception';

class WishlistController {
  async getProductsInWishlist(req: Request, res: Response, next: NextFunction) {
    const userId = req.user.id;

    if (!userId) {
      return res.status(400).json({ error: 'Продукта не существует' });
    }

    try {
      const wishlist = await prisma.productInWishlist.findMany({
        where: { userId },
        include: {
          product: {
            include: { sizes: { select: { id: true, size: true } } }
          }
        }
      });

      return res.json(wishlist);
    } catch (error) {
      next(error);
    }
  }

  async productToWishlist(req: Request, res: Response, next: NextFunction) {
    const { productId } = req.body;
    const userId = req.user.id;

    if (!productId) {
      return res.status(400).json({ error: 'Товара не существует' });
    }

    try {
      const existingProduct = await prisma.productInWishlist.findFirst({
        where: { userId, productId }
      });

      if (existingProduct) {
        throw ApiError.BadRequest('Вы уже добавили этот товар в вишлист');
      }

      const wishlist = await prisma.productInWishlist.create({
        data: { productId, userId }
      });

      res.json(wishlist);
    } catch (error) {
      next(error);
    }
  }

  async deleteProductInWishlist(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const userId = req.user.id;

    if (!id) {
      return res.status(400).json({ error: 'Продукта не существует' });
    }

    try {
      const existingProduct = await prisma.productInWishlist.findFirst({
        where: { userId, productId: id }
      });

      if (!existingProduct) {
        throw ApiError.BadRequest('Вы не можете убрать товар');
      }

      const wishlist = await prisma.productInWishlist.deleteMany({
        where: { productId: id, userId }
      });

      res.json(wishlist);
    } catch (error) {
      next(error);
    }
  }
}

export const wishlistController = new WishlistController();
