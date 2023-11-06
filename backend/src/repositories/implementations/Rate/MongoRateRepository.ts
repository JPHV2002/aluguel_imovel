import { Rate } from "../../../entities/Rate";
import { RateMongo } from "../../../models/Rate";
import { IRateRepository } from "../../IRateRepository";

export class MongoRateRepository implements IRateRepository {
  async createRate(rate: Rate): Promise<void> {
    const rateMongo = new RateMongo(rate);
    rateMongo.save();
  }
  async getRate(rateId: string): Promise<Rate[]> {
    return await RateMongo.find({ propertyId: rateId });
  }
}
