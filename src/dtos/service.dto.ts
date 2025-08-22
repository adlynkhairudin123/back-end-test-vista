export interface CreateServiceDto {
  name: string;
  description: string;
  price: number;
  companyId: number;
}

export interface ServiceDto {
  id: number;
  name: string;
  description: string;
  price: string; // decimal
  companyId: number;
  createdAt: string;
  updatedAt: string;
}
