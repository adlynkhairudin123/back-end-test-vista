import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: { title: 'Vista Test API', version: '1.0.0' },
    servers: [{ url: 'http://localhost:3000' }],
    components: {
      schemas: {
        // Input DTOs
        CreateCompanyDto: {
          type: 'object',
          required: ['name', 'registrationNumber'],
          properties: {
            name: { type: 'string' },
            registrationNumber: { type: 'string' }
          },
          example: {            
            name: 'Adlyn',
            registrationNumber: 'REG-001'
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
          },
          example: {            
            name: 'Gold',
            description: 'Premium plan',
            price: 49.9,
            companyId: 1
          }
        },

        // DB Models
        Company: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Adlyn' },
            registrationNumber: { type: 'string', example: 'REG-001' },
            createdAt: { type: 'string', format: 'date-time', example: '2025-08-22T17:48:28.965Z' },
            updatedAt: { type: 'string', format: 'date-time', example: '2025-08-22T17:48:28.965Z' },
            services: {
              type: 'array',
              items: { $ref: '#/components/schemas/Service' },
            },
          },
        },
        Service: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Gold' },
            description: { type: 'string', example: 'Premium plan' },
            price: { type: 'number', format: 'float', example: 49.9 },
            companyId: { type: 'integer', example: 1 },
            createdAt: { type: 'string', format: 'date-time', example: '2025-08-22T17:50:05.152Z' },
            updatedAt: { type: 'string', format: 'date-time', example: '2025-08-22T17:50:05.152Z' },
          },
        },

        // Errors
        ErrorResponse: {
          type: 'object',
          properties: {
            status: { type: 'integer', example: 404 },
            message: { type: 'string', example: 'Route not found' },
          },
        },
        ValidationErrorItem: {
          type: 'object',
          properties: {
            field: { type: 'string', example: 'name' },
            message: { type: 'string', example: 'name is required' },
          },
        },
        ValidationErrorResponse: {
          type: 'object',
          properties: {
            status: { type: 'integer', example: 400 },
            message: { type: 'string', example: 'Validation error' },
            errors: {
              type: 'array',
              items: { $ref: '#/components/schemas/ValidationErrorItem' },
            },
          },
        },
      },
    },

    paths: {
      '/companies': {
        post: {
          tags: ['Companies'],
          summary: 'Create a new company',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/CreateCompanyDto' },
              },
            },
          },
          responses: {
            '201': {
              description: 'Created',
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/Company' } },
              },
            },
            '400': {
              description: 'Validation error',
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/ValidationErrorResponse' } },
              },
            },
          },
        },
        get: {
          tags: ['Companies'],
          summary: 'List all companies with their services',
          responses: {
            '200': {
              description: 'OK',
              content: {
                'application/json': {
                  schema: { type: 'array', items: { $ref: '#/components/schemas/Company' } },
                },
              },
            },
          },
        },
      },

      '/services': {
        post: {
          tags: ['Services'],
          summary: 'Create a service under a company',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/CreateServiceDto' },
              },
            },
          },
          responses: {
            '201': {
              description: 'Created',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Service' } } },
            },
            '400': {
              description: 'Validation error',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/ValidationErrorResponse' } } },
            },
            '404': {
              description: 'Company not found',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } },
            },
          },
        },
      },

      '/services/{id}': {
        get: {
          tags: ['Services'],
          summary: 'Get service details by id',
          parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer', example: 1 } }],
          responses: {
            '200': {
              description: 'OK',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Service' } } },
            },
            '404': {
              description: 'Service not found',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } },
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'],
});
