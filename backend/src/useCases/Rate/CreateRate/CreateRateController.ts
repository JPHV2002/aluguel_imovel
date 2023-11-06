import { Request, Response } from "express";
import { CreateRateUseCase } from "./CreateRateUseCase";

export class CreateRateController {
  constructor(private createRateUseCase: CreateRateUseCase) {}
  async handle(request: Request, response: Response) {
    const { ownerId, rateNumber, comment, propertyId } = request.body;
    try {
      await this.createRateUseCase.execute({
        ownerId,
        rateNumber,
        comment,
        propertyId,
      });
      return response.status(201).json();
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Internal error" });
    }
  }
}
