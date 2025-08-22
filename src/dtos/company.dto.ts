// Request DTOs
export interface CreateCompanyDto {
  name: string;
  registrationNumber: string;
}

// Response DTOs
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

// Service DTO imported below to break cycle
export interface ServiceDto {
  id: number;
  name: string;
  description: string;
  price: string; // keep as string to preserve decimal
  companyId: number;
  createdAt: string;
  updatedAt: string;
}
