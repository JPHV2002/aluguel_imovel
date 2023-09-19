import { MongoUserRepository } from "../../repositories/implementations/MongoUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mongoUserRepository = new MongoUserRepository();

const createUserUseCase = new CreateUserUseCase(mongoUserRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
