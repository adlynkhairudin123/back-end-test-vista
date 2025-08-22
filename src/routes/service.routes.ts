import { Router } from 'express';
import { body, param } from 'express-validator';
import { postService, getServiceById } from '../controllers/service.controller';
import { validate } from '../middlewares/validate';

const router = Router();

/**
 * @openapi
 * /services:
 *   post:
 *     tags: [Services]
 *     summary: Create a service under a company
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateServiceDto'
 *           example:
 *             name: Gold
 *             description: Premium plan
 *             price: 49.9
 *             companyId: 1
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       '400':
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationErrorResponse'
 *       '404':
 *         description: Company not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post(
  '/',
  [
    body('name').isString().trim().notEmpty(),
    body('description').isString().trim().notEmpty(),
    body('price').isFloat({ gt: 0 }).withMessage('price must be positive'),
    body('companyId').isInt({ gt: 0 }),
  ],
  validate,
  postService
);

/**
 * @openapi
 * /services/{id}:
 *   get:
 *     tags: [Services]
 *     summary: Get service details by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       '404':
 *         description: Service not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/:id', [param('id').isInt({ gt: 0 })], validate, getServiceById);

export default router;
