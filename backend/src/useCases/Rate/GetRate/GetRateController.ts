import { Request, Response } from "express";
import { GetRateUseCase } from "./GetRateUseCase";

export class GetRateController {
  constructor(private getRateUseCase: GetRateUseCase) {}
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const rate = await this.getRateUseCase.execute({ id });
      return response.status(200).json(rate);
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Internal error" });
    }
  }
}
