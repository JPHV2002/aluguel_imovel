import { Rent } from "../../../entities/Rent";
import { RentMongo } from "../../../models/Rent";
import { IRentRepository } from "../../IRentRepository";

export class MongoRentRepository implements IRentRepository {
  async createRent(data: Rent): Promise<void> {
    const rateMongo = new RentMongo(data);
    rateMongo.save();
  }
  getRentFromProperty(propertyId: string): Promise<Rent[]> {
    return RentMongo.find({ propertyId: propertyId });
  }
}
