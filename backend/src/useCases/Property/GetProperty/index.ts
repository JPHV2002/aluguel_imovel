import { MongoPropertyRepository } from "../../../repositories/implementations/Property/MongoPropertyRepository";
import { GetProeprtyController } from "./GetPropertyController";
import { GetPropertyUseCase } from "./GetPropertyUseCase";

const getPropertyRepository = new MongoPropertyRepository();

const getPropertyUseCase = new GetPropertyUseCase(getPropertyRepository);

const getProeprtyController = new GetProeprtyController(getPropertyUseCase);

export { getProeprtyController, getPropertyUseCase };
