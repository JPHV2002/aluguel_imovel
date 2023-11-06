import { Rate } from "../../../entities/Rate";
import { IRateRepository } from "../../../repositories/IRateRepository";
import { ICreateRateRequestDTO } from "./CreateRateDTO";

export class CreateRateUseCase {
  constructor(private rateRepository: IRateRepository) {}
  async execute(data: ICreateRateRequestDTO) {
    const rate = new Rate(data);
    this.rateRepository.createRate(rate);
  }
}
