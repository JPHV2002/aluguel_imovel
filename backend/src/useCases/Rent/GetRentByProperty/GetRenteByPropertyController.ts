import { Request, Response } from "express";
import { GetRentByPropertyUseCase } from "./GetRentByPropertyUseCase";

export class GetRentByPropertyController {
  constructor(private getRentByPropertyUseCase: GetRentByPropertyUseCase) {}
  async handle(request: Request, response: Response) {
    const { propertyId } = request.params;
    try {
      const resposneData = await this.getRentByPropertyUseCase.execute(
        propertyId
      );
      response.status(200).json(resposneData);
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Internal error" });
    }
  }
}
