import { CreateServiceDto } from '../dtos/service.dto';
export declare function createService(data: CreateServiceDto): Promise<{
    name: string;
    description: string;
    price: import("@prisma/client/runtime/library").Decimal;
    companyId: number;
    id: number;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare function getServiceById(id: number): Promise<{
    name: string;
    description: string;
    price: import("@prisma/client/runtime/library").Decimal;
    companyId: number;
    id: number;
    createdAt: Date;
    updatedAt: Date;
}>;
//# sourceMappingURL=service.service.d.ts.map