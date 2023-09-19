import { Request, Response } from "express";
import { DeletePropertyUseCase } from "./DeletePropertyUseCase";

export class DeletePropertyController {
  constructor(private deletePropertyUseCase: DeletePropertyUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
      await this.deletePropertyUseCase.execute(id);
      return response.status(200).send();
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message || "Internal error" });
    }
  }
}
