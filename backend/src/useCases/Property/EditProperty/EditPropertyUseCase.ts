import { Property } from "../../../entities/Property";
import { IPropertyRepository } from "../../../repositories/IPropertyRepository";
import { IEditPropertyDTO } from "./EditPropertyDTO";

export class EditPropertyUseCase {
  constructor(private propertyRepository: IPropertyRepository) {}
  async execute(data: IEditPropertyDTO, id: string) {
    const propertyAlreadyExists = await this.propertyRepository.getPropertyById(
      id
    );
    if (propertyAlreadyExists) {
      const property = new Property(data, id);
      await this.propertyRepository.editProperty(property);
      return;
    }
    throw new Error("Property does not exists");
  }
}
