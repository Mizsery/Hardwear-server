import { Router } from 'express';
import { userController } from '../controllers';
import { authMiddleware } from '../middleware';

export const router = Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
//! Delete users route
router.get('/users', authMiddleware, userController.getUsers);
