import { MongoPropertyRepository } from "../../../repositories/implementations/Property/MongoPropertyRepository";
import { MongoRateRepository } from "../../../repositories/implementations/Rate/MongoRateRepository";
import { CreateRateController } from "./CreateRateController";
import { CreateRateUseCase } from "./CreateRateUseCase";

const createRateRepository = new MongoRateRepository();
const propertyRepository = new MongoPropertyRepository();

const createRateUseCase = new CreateRateUseCase(
  createRateRepository,
  propertyRepository
);

const createRateController = new CreateRateController(createRateUseCase);

export { createRateController, createRateUseCase };
