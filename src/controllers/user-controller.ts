import { NextFunction, Request, Response } from 'express';
import { userService } from '../service/user-service';

class UserController {
  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, name, password, phone } = req.body;

      const userData = await userService.signup({ email, name, password, phone });

      res.cookie('refreshToken', userData.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000
      });

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const userData = await userService.login({ email, password });

      res.cookie('refreshToken', userData.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000
      });

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;

      const userData = await userService.refresh({ refreshToken });

      res.cookie('refreshToken', userData.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000
      });

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;

      await userService.logout(refreshToken);
      res.clearCookie('refreshToken');

      return res.status(204).json({});
    } catch (error) {
      next(error);
    }
  }
}

export const userController = new UserController();
