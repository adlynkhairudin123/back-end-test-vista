"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCompany = createCompany;
exports.listCompaniesWithServices = listCompaniesWithServices;
const prisma_1 = require("../config/prisma");
const company_dto_1 = require("../dtos/company.dto");
async function createCompany(data) {
    return prisma_1.prisma.company.create({ data });
}
async function listCompaniesWithServices() {
    return prisma_1.prisma.company.findMany({
        include: { services: true },
        orderBy: { id: 'asc' },
    });
}
//# sourceMappingURL=company.service.js.map