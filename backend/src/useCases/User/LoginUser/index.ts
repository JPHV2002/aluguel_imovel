import { MongoUserRepository } from "../../../repositories/implementations/User/MongoUserRepository";
import { LoginUserController } from "./LoginUserController";
import { LoginUserUseCase } from "./LoginUserUseCase";

const mongoUserRepository = new MongoUserRepository();

const loginUserUseCase = new LoginUserUseCase(mongoUserRepository);

const loginUserController = new LoginUserController(loginUserUseCase);

export { loginUserController, loginUserUseCase };
