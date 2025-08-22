export interface CreateCompanyDto {
    name: string;
    registrationNumber: string;
}
export interface CompanyDto {
    id: number;
    name: string;
    registrationNumber: string;
    createdAt: string;
    updatedAt: string;
}
export interface CompanyWithServicesDto extends CompanyDto {
    services: ServiceDto[];
}
export interface ServiceDto {
    id: number;
    name: string;
    description: string;
    price: string;
    companyId: number;
    createdAt: string;
    updatedAt: string;
}
//# sourceMappingURL=company.dto.d.ts.map