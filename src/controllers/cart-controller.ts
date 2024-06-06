import { NextFunction, Request, Response } from 'express';
import { prisma } from '../prisma';
import { ApiError } from '../exception';

class CartController {
  async productToCart(req: Request | any, res: Response, next: NextFunction) {
    const { productId, size } = req.body;
    const userId = req.user.id;

    if (!productId) {
      return res.status(400).json({ error: 'Товара не существует' });
    }

    try {
      const existingProduct = await prisma.productInCart.findFirst({
        where: { userId, productId, size }
      });

      if (existingProduct) {
        const cart = await prisma.productInCart.update({
          where: { userId, productId, id: existingProduct.id },
          data: { quantity: { increment: 1 } }
        });
        res.json(cart);
      } else {
        const cart = await prisma.productInCart.create({
          data: { userId, productId, size, quantity: 1 }
        });
        res.json(cart);
      }
    } catch (error) {
      next(error);
    }
  }

  async deleteProductInCart(req: Request | any, res: Response, next: NextFunction) {
    const { productId, size } = req.body;
    const { typeDelete } = req.query;
    const userId = req.user.id;

    if (!productId) {
      return res.status(400).json({ error: 'Товара не существует' });
    }

    try {
      const existingProduct = await prisma.productInCart.findFirst({
        where: { userId, productId, size }
      });

      if (existingProduct !== null) {
        if (typeDelete === 'one' && existingProduct.quantity !== 1) {
          const wishlist = await prisma.productInCart.update({
            where: { productId, userId, id: existingProduct.id },
            data: { quantity: { decrement: 1 } }
          });
          res.json(wishlist);
        } else {
          const wishlist = await prisma.productInCart.delete({
            where: { productId, userId, size, id: existingProduct.id }
          });
          res.json(wishlist);
        }
      }
    } catch (error) {
      next(error);
    }
  }

  async getProductsInCart(req: Request | any, res: Response, next: NextFunction) {
    const userId = req.user.id;

    if (!userId) {
      return res.status(400).json({ error: 'Продукта не существует' });
    }

    try {
      const cart = await prisma.productInCart.findMany({
        where: { userId },
        include: { product: true }
      });

      return res.json(cart);
    } catch (error) {
      next(error);
    }
  }
}

export const cartController = new CartController();
