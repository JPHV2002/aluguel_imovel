import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { ILoginUserDTO } from "./LoginUserDTO";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export class LoginUserUseCase {
  constructor(private userRepository: IUsersRepository) {}
  async execute(data: ILoginUserDTO) {
    const userData = await this.userRepository.findByEmail(data.email);
    if (userData) {
      const match = await bcrypt.compare(data.password, userData.password);
      if (match) {
        const token = jwt.sign({ email: data.email }, "your_secret_key", {
          expiresIn: "1h",
        });
        return token;
      }
    }
    throw new Error("Wrong email or password");
  }
}
