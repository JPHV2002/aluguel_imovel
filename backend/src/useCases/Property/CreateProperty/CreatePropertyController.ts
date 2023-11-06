import { Request, Response } from "express";
import { CreatePropertyUseCase } from "./CreatePropertyUseCase";

export class CreatePropertyController {
  constructor(private createPropertyUseCase: CreatePropertyUseCase) {}
  async handle(request: any, response: Response): Promise<Response> {
    const { name, bedrooms, bathrooms, city, state, country } = request.body;
    const ownerId = request.user.id;
    try {
      await this.createPropertyUseCase.execute({
        name,
        ownerId,
        bedrooms,
        bathrooms,
        address: { city, state, country },
      });
      return response.status(201).json();
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Internal error" });
    }
  }
}
