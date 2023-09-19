import { MongoPropertyRepository } from "../../../repositories/implementations/Property/MongoPropertyRepository";
import { CreatePropertyController } from "./CreatePropertyController";
import { CreatePropertyUseCase } from "./CreatePropertyUseCase";

const createPropertyRepository = new MongoPropertyRepository();

const createPropertyUseCase = new CreatePropertyUseCase(
  createPropertyRepository
);

const createPropertyController = new CreatePropertyController(
  createPropertyUseCase
);

export { createPropertyController, createPropertyUseCase };
