import { Request, Response, NextFunction } from 'express';
import * as companyService from '../services/company.service';
import { CreateCompanyDto } from '../dtos/company.dto';

export async function postCompany(req: Request, res: Response, next: NextFunction) {
  try {
    const payload: CreateCompanyDto = req.body;
    const created = await companyService.createCompany(payload);
    return res.status(201).json(created);
  } catch (err) { next(err); }
}

export async function getCompanies(_req: Request, res: Response, next: NextFunction) {
  try {
    const list = await companyService.listCompaniesWithServices();
    return res.status(200).json(list);
  } catch (err) { next(err); }
}
