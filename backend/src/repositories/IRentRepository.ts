import { Rent } from "../entities/Rent";

export interface IRentRepository {
  createRent(data: Rent): Promise<void>;
  getRentFromProperty(propertyId: string): Promise<Rent[]>;
}
