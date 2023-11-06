import { Rate } from "../entities/Rate";

export interface IRateRepository {
  createRate(rate: Rate): Promise<void>;
  getRate(rateId: string): Promise<Rate[]>;
}
