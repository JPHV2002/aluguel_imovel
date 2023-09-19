import { IPropertyRepository } from "../../../repositories/IPropertyRepository";

export class DeletePropertyUseCase {
  constructor(private propertyRepository: IPropertyRepository) {}
  async execute(id: string): Promise<void> {
    const propertyAlreadyExists = await this.propertyRepository.getPropertyById(
      id
    );
    if (propertyAlreadyExists) {
      this.propertyRepository.deleteProperty(id);
      return;
    }
    throw new Error("Property does not exists");
  }
}
