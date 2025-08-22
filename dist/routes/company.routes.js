"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const company_controller_1 = require("../controllers/company.controller");
const validate_1 = require("../middlewares/validate");
const router = (0, express_1.Router)();
/**
 * POST /companies
 * body: { name, registrationNumber }
 */
router.post('/', [
    (0, express_validator_1.body)('name').isString().trim().notEmpty().withMessage('name is required'),
    (0, express_validator_1.body)('registrationNumber').isString().trim().notEmpty().withMessage('registrationNumber is required'),
], validate_1.validate, company_controller_1.postCompany);
/**
 * GET /companies
 */
router.get('/', company_controller_1.getCompanies);
exports.default = router;
