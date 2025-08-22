import { CreateCompanyDto } from '../dtos/company.dto';
export declare function createCompany(data: CreateCompanyDto): Promise<{
    name: string;
    registrationNumber: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare function listCompaniesWithServices(): Promise<({
    services: {
        name: string;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        companyId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[];
} & {
    name: string;
    registrationNumber: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
})[]>;
//# sourceMappingURL=company.service.d.ts.map