import { IPropertyRepository } from "../../../repositories/IPropertyRepository";
import { IGetPropertyRequestDTO } from "./GetPropertyDTO";

export class GetPropertyUseCase {
  constructor(private propertyRepository: IPropertyRepository) {}
  async execute(id: string): Promise<IGetPropertyRequestDTO[]> {
    console.log(await this.propertyRepository.getPropertyById(id));
    return await this.propertyRepository.getPropertyById(id);
  }
}
