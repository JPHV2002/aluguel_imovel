import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  private createUserUseCase: CreateUserUseCase;
  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, confirmPassword } = request.body;
    try {
      if (password != confirmPassword) {
        return response
          .status(401)
          .json({ message: "password is diferent from confirm password" });
      }
      await this.createUserUseCase.execute({ name, email, password });
      return response.status(201).send();
    } catch (error) {
      return response.status(401).json({
        message: error.message || "Internal error",
      });
    }
  }
}
