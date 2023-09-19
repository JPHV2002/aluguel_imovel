import { Property } from "../../../entities/Property";
import { IPropertyRepository } from "../../../repositories/IPropertyRepository";

export class GetAllPropertyUseCase {
  constructor(private propertyRepository: IPropertyRepository) {}
  async execute(): Promise<Property[]> {
    return await this.propertyRepository.getAllProperty();
  }
}
