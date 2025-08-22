"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const service_controller_1 = require("../controllers/service.controller");
const validate_1 = require("../middlewares/validate");
const router = (0, express_1.Router)();
/**
 * POST /services
 * body: { name, description, price, companyId }
 */
router.post('/', [
    (0, express_validator_1.body)('name').isString().trim().notEmpty(),
    (0, express_validator_1.body)('description').isString().trim().notEmpty(),
    (0, express_validator_1.body)('price').isFloat({ gt: 0 }).withMessage('price must be positive'),
    (0, express_validator_1.body)('companyId').isInt({ gt: 0 }),
], validate_1.validate, service_controller_1.postService);
/**
 * GET /services/:id
 */
router.get('/:id', [(0, express_validator_1.param)('id').isInt({ gt: 0 })], validate_1.validate, service_controller_1.getServiceById);
exports.default = router;
//# sourceMappingURL=service.routes.js.map