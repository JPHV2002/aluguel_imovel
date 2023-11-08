import { Rent } from "../../../entities/Rent";
import { IRentRepository } from "../../../repositories/IRentRepository";
import { ICreateRenteDTO } from "./CreateRentDTO";

export class CreateRentUseCase {
  constructor(private rentRepository: IRentRepository) {}

  async execute(data: ICreateRenteDTO) {
    const rentData = await this.rentRepository.getRentFromProperty(
      data.propertyId
    );

    let hasConflict = false;

    rentData.map((rent) => {
      if (
        (data.startDate >= rent.startDate && data.startDate <= rent.endDate) ||
        (data.endDate >= rent.startDate && data.endDate <= rent.endDate)
      ) {
        hasConflict = true;
        return;
      }

      if (rent.startDate == data.startDate || rent.endDate == data.endDate) {
        hasConflict = true;
        return;
      }
    });

    if (hasConflict) {
      throw new Error("Has conflict with dates");
    } else {
      const newRent = new Rent(data);
      await this.rentRepository.createRent(newRent);
      return;
    }
  }
}
