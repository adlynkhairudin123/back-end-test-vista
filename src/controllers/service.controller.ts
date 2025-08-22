import { Request, Response, NextFunction } from 'express';
import * as serviceService from '../services/service.service';
import { CreateServiceDto } from '../dtos/service.dto';

export async function postService(req: Request, res: Response, next: NextFunction) {
  try {
    const payload: CreateServiceDto = {
      name: req.body.name,
      description: req.body.description,
      price: Number(req.body.price),
      companyId: Number(req.body.companyId),
    };
    const created = await serviceService.createService(payload);
    return res.status(201).json(created);
  } catch (err) { next(err); }
}

export async function getServiceById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const service = await serviceService.getServiceById(id);
    return res.status(200).json(service);
  } catch (err) { next(err); }
}
