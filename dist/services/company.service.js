"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCompany = createCompany;
exports.listCompaniesWithServices = listCompaniesWithServices;
const prisma_1 = require("../config/prisma");
async function createCompany(data) {
    return prisma_1.prisma.company.create({ data });
}
async function listCompaniesWithServices() {
    return prisma_1.prisma.company.findMany({
        include: { services: true },
        orderBy: { id: 'asc' },
    });
}
