import { Property } from "../../../entities/Property";
import { IPropertyRepository } from "../../../repositories/IPropertyRepository";
import { ICreatePropertyRequestDTO } from "./CreatePropertyDTO";

export class CreatePropertyUseCase {
  constructor(private propertyRepository: IPropertyRepository) {}
  async execute(data: ICreatePropertyRequestDTO) {
    const property = new Property(data);
    this.propertyRepository.createProperty(property);
  }
}
