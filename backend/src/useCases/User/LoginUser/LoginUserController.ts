import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";

export class LoginUserController {
  constructor(private loginUserUseCase: LoginUserUseCase) {}
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    try {
      const token = await this.loginUserUseCase.execute({ email, password });
      response.status(200).send({ token: token });
    } catch (error) {
      return response.status(401).json({
        message: error.message || "Internal error",
      });
    }
  }
}
