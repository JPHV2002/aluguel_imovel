import { Property } from "../entities/Property";

export interface IPropertyRepository {
  createProperty(property: Property): Promise<void>;
  getPropertyById(id: string): Promise<Property>;
  getAllProperty(): Promise<Property[]>;
  editProperty(property: Property): Promise<void>;
}
