import { prisma } from '../config/prisma';
import { CreateCompanyDto } from '../dtos/company.dto';
// import { HttpError } from '../middlewares/errorHandler'; // not needed here

export async function createCompany(data: CreateCompanyDto) {
  return prisma.company.create({ data });
}

export async function listCompaniesWithServices() {
  return prisma.company.findMany({
    include: { services: true },
    orderBy: { id: 'asc' },
  });
}
