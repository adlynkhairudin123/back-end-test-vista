"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
const express_validator_1 = require("express-validator");
function validate(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty())
        return next();
    const list = errors.array({ onlyFirstError: true });
    return res.status(400).json({
        status: 400,
        message: 'Validation error',
        errors: list.map(e => ({ field: e.path ?? e.param, message: e.msg })),
        // ^ prefers `path` (v7), falls back to `param` (older versions)
    });
}
