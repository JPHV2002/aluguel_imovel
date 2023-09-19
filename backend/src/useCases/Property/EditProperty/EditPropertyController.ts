import { Request, Response } from "express";
import { EditPropertyUseCase } from "./EditPropertyUseCase";

export class EditPropertyController {
  constructor(private editPropertyUseCase: EditPropertyUseCase) {}
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, ownerId, bedrooms, bathrooms, city, state, country } =
      request.body;
    try {
      await this.editPropertyUseCase.execute(
        {
          name,
          ownerId,
          bedrooms,
          bathrooms,
          address: { city, state, country },
        },
        id
      );
      return response.status(201).json();
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
