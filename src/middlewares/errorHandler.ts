// src/middlewares/errorHandler.ts
import type { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';

export function notFound(_req: Request, res: Response) {
  res.status(404).json({ status: 404, message: 'Route not found' });
}

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
    return res.status(409).json({
      status: 409,
      message: `Duplicate value for unique field(s): ${(err.meta as any)?.target?.join?.(', ') || 'unknown'}`
    });
  }
  const status = typeof err.status === 'number' ? err.status : 500;
  res.status(status).json({ status, message: err.message || 'Internal Server Error' });
}

export class HttpError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

