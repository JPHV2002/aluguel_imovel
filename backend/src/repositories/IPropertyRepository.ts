import { Property } from "../entities/Property";

export interface IPropertyRepository {
  createProperty(property: Property): Promise<void>;
}
