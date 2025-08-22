import { Router } from 'express';
import { body } from 'express-validator';
import { postCompany, getCompanies } from '../controllers/company.controller';
import { validate } from '../middlewares/validate';

const router = Router();

/**
 * @openapi
 * /companies:
 *   post:
 *     tags: [Companies]
 *     summary: Create a new company
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCompanyDto'
 *           example:
 *             name: Adlyn
 *             registrationNumber: REG-002
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Company'
 *             examples:
 *               created:
 *                 value:
 *                   id: 1
 *                   name: Adlyn
 *                   registrationNumber: REG-001
 *                   createdAt: 2025-08-22T17:48:28.965Z
 *                   updatedAt: 2025-08-22T17:48:28.965Z
 *                   services: []
 *       '400':
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationErrorResponse'
 */
router.post(
  '/',
  [
    body('name').isString().trim().notEmpty().withMessage('name is required'),
    body('registrationNumber').isString().trim().notEmpty().withMessage('registrationNumber is required'),
  ],
  validate,
  postCompany
);

/**
 * @openapi
 * /companies:
 *   get:
 *     tags: [Companies]
 *     summary: List all companies with their services
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Company'
 *             examples:
 *               sample:
 *                 value:
 *                   - id: 1
 *                     name: Adlyn
 *                     registrationNumber: REG-001
 *                     createdAt: 2025-08-22T17:48:28.965Z
 *                     updatedAt: 2025-08-22T17:48:28.965Z
 *                     services:
 *                       - id: 1
 *                         name: Gold
 *                         description: Premium plan
 *                         price: 49.9
 *                         companyId: 1
 *                         createdAt: 2025-08-22T17:50:05.152Z
 *                         updatedAt: 2025-08-22T17:50:05.152Z
 */
router.get('/', getCompanies);

export default router;
