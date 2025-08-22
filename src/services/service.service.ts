import { prisma } from '../config/prisma';
import { CreateServiceDto } from '../dtos/service.dto';
import { HttpError } from '../middlewares/errorHandler';

export async function createService(data: CreateServiceDto) {
  const company = await prisma.company.findUnique({ where: { id: data.companyId } });
  if (!company) throw new HttpError(404, 'Company not found');
  return prisma.service.create({ data });
}

export async function getServiceById(id: number) {
  const service = await prisma.service.findUnique({ where: { id } });
  if (!service) throw new HttpError(404, 'Service not found');
  return service;
}
