import type { Request, Response, NextFunction } from 'express';
import { validationResult, type ValidationError } from 'express-validator';

export function validate(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();

  const list = errors.array({ onlyFirstError: true }) as ValidationError[];

  return res.status(400).json({
    status: 400,
    message: 'Validation error',
    errors: list.map(e => ({ field: (e as any).path ?? (e as any).param, message: e.msg })),
    // ^ prefers `path` (v7), falls back to `param` (older versions)
  });
}
