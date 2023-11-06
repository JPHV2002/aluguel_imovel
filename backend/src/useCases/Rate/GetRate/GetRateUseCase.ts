import { IRateRepository } from "../../../repositories/IRateRepository";
import { IGetRateRequestDTO } from "./GetRateDTO";

export class GetRateUseCase {
  constructor(private rateRepository: IRateRepository) {}
  async execute(data: IGetRateRequestDTO) {
    return await this.rateRepository.getRate(data.id);
  }
}
