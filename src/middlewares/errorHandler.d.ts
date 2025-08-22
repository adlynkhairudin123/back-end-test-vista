import { Request, Response, NextFunction } from 'express';
export declare class HttpError extends Error {
    status: number;
    constructor(status: number, message: string);
}
export declare function notFound(_req: Request, _res: Response, next: NextFunction): void;
export declare function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction): void;
//# sourceMappingURL=errorHandler.d.ts.map