import { Router } from 'express';
import {
  cartController,
  productController,
  userController,
  wishlistController
} from '../controllers';
import { authMiddleware } from '../middleware';

export const router = Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', authMiddleware, userController.refresh);

router.get('/products', productController.getAllProducts);
router.get('/product/:id', productController.getProductById);
router.get('/products/:category', productController.getProductsByCategory);

router.post('/product-wishlist', authMiddleware, wishlistController.productToWishlist);
router.delete('/product-wishlist/:id', authMiddleware, wishlistController.deleteProductInWishlist);
router.get('/products-wishlist', authMiddleware, wishlistController.getProductsInWishlist);

router.post('/product-cart', authMiddleware, cartController.productToCart);
router.delete('/product-cart', authMiddleware, cartController.deleteProductInCart);
router.get('/products-cart', authMiddleware, cartController.getProductsInCart);
