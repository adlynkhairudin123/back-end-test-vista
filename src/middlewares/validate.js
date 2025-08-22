"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
function validate(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty())
        return next();
    return res.status(400).json({
        status: 400,
        message: 'Validation error',
        errors: errors.array().map(e => ({ field: e.param, message: e.msg })),
    });
}
//# sourceMappingURL=validate.js.map