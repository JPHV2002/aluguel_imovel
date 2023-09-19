import { Request, Response } from "express";
import { GetAllPropertyUseCase } from "./GetAllPropertyUseCase";
import { Property } from "../../../entities/Property";

export class GetAllPropertyController {
  constructor(private getAllPropertyUseCase: GetAllPropertyUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const properties: Property[] = await this.getAllPropertyUseCase.execute();
      return response.status(200).json(properties);
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Internal error" });
    }
  }
}
