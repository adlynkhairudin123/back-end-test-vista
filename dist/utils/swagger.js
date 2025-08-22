"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
exports.swaggerSpec = (0, swagger_jsdoc_1.default)({
    definition: {
        openapi: '3.0.0',
        info: { title: 'Vista Test API', version: '1.0.0' },
        servers: [{ url: 'http://localhost:3000' }],
        components: {
            schemas: {
                CreateCompanyDto: {
                    type: 'object',
                    required: ['name', 'registrationNumber'],
                    properties: {
                        name: { type: 'string' },
                        registrationNumber: { type: 'string' }
                    }
                },
                CreateServiceDto: {
                    type: 'object',
                    required: ['name', 'description', 'price', 'companyId'],
                    properties: {
                        name: { type: 'string' },
                        description: { type: 'string' },
                        price: { type: 'number', format: 'float' },
                        companyId: { type: 'integer' }
                    }
                }
            }
        },
        paths: {
            '/companies': {
                post: {
                    summary: 'Create a new company',
                    requestBody: {
                        required: true,
                        content: { 'application/json': { schema: { $ref: '#/components/schemas/CreateCompanyDto' } } }
                    },
                    responses: { '201': { description: 'Created' }, '400': { description: 'Validation error' } }
                },
                get: {
                    summary: 'List all companies with their services',
                    responses: { '200': { description: 'OK' } }
                }
            },
            '/services': {
                post: {
                    summary: 'Create a service under a company',
                    requestBody: {
                        required: true,
                        content: { 'application/json': { schema: { $ref: '#/components/schemas/CreateServiceDto' } } }
                    },
                    responses: {
                        '201': { description: 'Created' },
                        '400': { description: 'Validation error' },
                        '404': { description: 'Company not found' }
                    }
                }
            },
            '/services/{id}': {
                get: {
                    summary: 'Get service details by id',
                    parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
                    responses: { '200': { description: 'OK' }, '404': { description: 'Service not found' } }
                }
            }
        }
    },
    apis: []
});
