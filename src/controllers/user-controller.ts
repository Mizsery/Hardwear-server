import { NextFunction, Request, Response } from 'express';

class UserController {
  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      res.send('signup');
    } catch (error) {}
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      res.send('login');
    } catch (error) {}
  }

  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      res.send('refresh');
    } catch (error) {}
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {}
  }
}

export const userController = new UserController();
