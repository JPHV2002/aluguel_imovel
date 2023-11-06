import { MongoRateRepository } from "../../../repositories/implementations/Rate/MongoRateRepository";
import { CreateRateController } from "./CreateRateController";
import { CreateRateUseCase } from "./CreateRateUseCase";

const createRateRepository = new MongoRateRepository();

const createRateUseCase = new CreateRateUseCase(createRateRepository);

const createRateController = new CreateRateController(createRateUseCase);

export { createRateController, createRateUseCase };
