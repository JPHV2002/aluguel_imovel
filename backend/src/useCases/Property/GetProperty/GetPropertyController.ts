import { Request, Response } from "express";
import { GetPropertyUseCase } from "./GetPropertyUseCase";

export class GetProeprtyController {
  constructor(private getPropertyUseCase: GetPropertyUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
      const property = await this.getPropertyUseCase.execute(id);
      return response.status(200).json(property);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
}
