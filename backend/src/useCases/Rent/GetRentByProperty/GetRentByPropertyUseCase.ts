import { IRentRepository } from "../../../repositories/IRentRepository";

export class GetRentByPropertyUseCase {
  constructor(private rentRepository: IRentRepository) {}

  async execute(propertyId: string) {
    return await this.rentRepository.getRentFromProperty(propertyId);
  }
}
