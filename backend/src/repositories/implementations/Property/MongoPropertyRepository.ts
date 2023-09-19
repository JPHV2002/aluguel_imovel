import { Property } from "../../../entities/Property";
import { PropertyMongo } from "../../../models/Property";
import { IPropertyRepository } from "../../IPropertyRepository";

export class MongoPropertyRepository implements IPropertyRepository {
  async createProperty(property: Property): Promise<void> {
    const propertyMongo = new PropertyMongo(property);
    propertyMongo.save();
  }
  async getPropertyById(id: string): Promise<Property> {
    return PropertyMongo.findOne({ id: id });
  }
}
