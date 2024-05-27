import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../exception';

export const errorMiddleware = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors, status: err.status });
  }

  return res.status(500).json({ status: 500, message: 'Непредвиденная ошибка' });
};
