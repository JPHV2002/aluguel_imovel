import { Rate } from "../../../entities/Rate";
import { IPropertyRepository } from "../../../repositories/IPropertyRepository";
import { IRateRepository } from "../../../repositories/IRateRepository";
import { ICreateRateRequestDTO } from "./CreateRateDTO";

export class CreateRateUseCase {
  constructor(
    private rateRepository: IRateRepository,
    private propertyRepository: IPropertyRepository
  ) {}
  async execute(data: ICreateRateRequestDTO) {
    const propertyData = await this.propertyRepository.getPropertyById(
      data.propertyId
    );
    console.log(data.propertyId);
    if (propertyData.ownerId != data.userId) {
      const rate = new Rate(data);
      this.rateRepository.createRate(rate);
      return;
    }
    throw new Error("You canot rate your own property");
  }
}
