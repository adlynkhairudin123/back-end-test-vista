"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createService = createService;
exports.getServiceById = getServiceById;
const prisma_1 = require("../config/prisma");
const errorHandler_1 = require("../middlewares/errorHandler");
async function createService(data) {
    const company = await prisma_1.prisma.company.findUnique({ where: { id: data.companyId } });
    if (!company)
        throw new errorHandler_1.HttpError(404, 'Company not found');
    return prisma_1.prisma.service.create({ data });
}
async function getServiceById(id) {
    const service = await prisma_1.prisma.service.findUnique({ where: { id } });
    if (!service)
        throw new errorHandler_1.HttpError(404, 'Service not found');
    return service;
}
