import { Request, Response } from "express";
import { CreateRateUseCase } from "./CreateRateUseCase";

export class CreateRateController {
  constructor(private createRateUseCase: CreateRateUseCase) {}
  async handle(request: any, response: Response) {
    const { ownerId, rateNumber, comment, propertyId } = request.body;
    const userId = request.user.id;
    try {
      await this.createRateUseCase.execute({
        ownerId,
        rateNumber,
        comment,
        propertyId,
        userId,
      });
      return response.status(201).json();
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Internal error" });
    }
  }
}
