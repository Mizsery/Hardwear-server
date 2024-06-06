import { NextFunction, Request, Response } from 'express';
import { prisma } from '../prisma';

class ProductController {
  async getAllProducts(req: Request | any, res: Response, next: NextFunction) {
    const { type } = req.query;

    try {
      const products = await prisma.product.findMany({
        where: { typeProduct: type },
        orderBy: { name: 'desc' },
        include: {
          category: true,
          sizes: {
            select: {
              id: true,
              size: true
            }
          }
        }
      });

      const categories = await prisma.categories.findMany({
        where: { products: { some: { typeProduct: type } } },
        select: { category: true, id: true }
      });
      res.json({ products, categories });
    } catch (error) {
      next(error);
    }
  }

  async getProductsByCategory(req: any, res: Response, next: NextFunction) {
    const { category } = req.params;
    const { type } = req.query;

    try {
      const products = await prisma.product.findMany({
        where: { categoryId: category },
        include: {
          category: true,
          sizes: true
        }
      });

      const categories = await prisma.categories.findMany({
        where: { products: { some: { typeProduct: type } } },
        select: { category: true, id: true }
      });

      res.json({ products, categories });
    } catch (error) {
      next(error);
    }
  }

  async getProductById(req: any, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      const product = await prisma.product.findFirst({
        where: { id: id },
        include: {
          sizes: true,
          category: true,
          productInWishlist: true
        }
      });

      res.json(product);
    } catch (error) {
      next(error);
    }
  }
}

export const productController = new ProductController();
