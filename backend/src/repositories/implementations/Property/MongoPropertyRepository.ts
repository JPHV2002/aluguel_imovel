import { Property } from "../../../entities/Property";
import { PropertyMongo } from "../../../models/Property";
import { IPropertyRepository } from "../../IPropertyRepository";

export class MongoPropertyRepository implements IPropertyRepository {
  async createProperty(property: Property): Promise<void> {
    const propertyMongo = new PropertyMongo(property);
    propertyMongo.save();
  }
  async getPropertyById(id: string): Promise<Property> {
    return await PropertyMongo.findOne({ id: id });
  }
  async getAllProperty(): Promise<Property[]> {
    return await PropertyMongo.find();
  }
  async editProperty(property: Property): Promise<void> {
    await PropertyMongo.updateOne(
      { id: property.id },
      {
        $set: property,
      }
    );
  }
  async deleteProperty(id: string): Promise<void> {
    await PropertyMongo.deleteOne({ id: id });
  }
}
