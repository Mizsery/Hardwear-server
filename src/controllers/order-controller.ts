import { NextFunction, Request, Response } from 'express';
import { prisma } from '../prisma';

class OderController {
  async getAllOrders(req: Request, res: Response, next: NextFunction) {
    const userId = req.user.id;

    try {
      const cart = await prisma.order.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        include: {
          productInOrder: {
            include: { product: { select: { name: true, image: true, price: true } } }
          }
        }
      });

      return res.json(cart);
    } catch (error) {
      next(error);
    }
  }

  async addInOrder(req: Request, res: Response, next: NextFunction) {
    const userId = req.user.id;
    const { street, city, state, zip } = req.body;

    try {
      const cartItems = await prisma.productInCart.findMany({
        where: { userId },
        include: { product: true }
      });

      if (cartItems.length == 0) {
        return res.status(400).json({ error: 'Корзина пуста' });
      }

      const price = cartItems.reduce((prev, current) => {
        return prev + current.quantity * +current.product.price;
      }, 0);

      const order = await prisma.order.create({
        data: {
          userId,
          netAmount: price,
          address: {
            street,
            city,
            state,
            zip
          },
          productInOrder: {
            create: cartItems.map((cart) => {
              return { productId: cart.productId, quantity: cart.quantity, size: cart.size };
            })
          }
        }
      });

      await prisma.productInCart.deleteMany({ where: { userId } });

      res.json(order);
    } catch (error) {
      next(error);
    }
  }

  async getOrderById(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      const order = await prisma.order.findFirst({
        where: { id },
        include: {
          productInOrder: {
            include: { product: { select: { id: true, name: true, image: true, price: true } } }
          }
        }
      });

      res.json(order);
    } catch (error) {
      next(error);
    }
  }
}

export const orderController = new OderController();
