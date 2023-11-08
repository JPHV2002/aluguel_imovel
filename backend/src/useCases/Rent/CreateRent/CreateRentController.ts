import { Response } from "express";
import { CreateRentUseCase } from "./CreateRentUseCase";

export class CreateRenteController {
  constructor(private createRenteUseCase: CreateRentUseCase) {}

  async handle(request: any, response: Response) {
    const { propertyId, startDate, endDate } = request.body;
    const ownerId = request.user.id;
    try {
      await this.createRenteUseCase.execute({
        ownerId,
        propertyId,
        startDate,
        endDate,
      });
      return response.status(201).json();
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Internal error" });
    }
  }
}
