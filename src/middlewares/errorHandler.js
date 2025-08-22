"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
exports.notFound = notFound;
exports.errorHandler = errorHandler;
const express_1 = require("express");
class HttpError extends Error {
    status;
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
exports.HttpError = HttpError;
function notFound(_req, _res, next) {
    next(new HttpError(404, 'Route not found'));
}
function errorHandler(err, _req, res, _next) {
    const status = err.status || 500;
    const message = err.message || 'Internal server error';
    res.status(status).json({ status, message });
}
//# sourceMappingURL=errorHandler.js.map