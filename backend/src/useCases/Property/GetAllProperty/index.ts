import { MongoPropertyRepository } from "../../../repositories/implementations/Property/MongoPropertyRepository";
import { GetAllPropertyController } from "./GetAllPropertyController";
import { GetAllPropertyUseCase } from "./GetAllPropertyUseCase";

const getAllPropertyRepository = new MongoPropertyRepository();

const getAllPropertyUseCase = new GetAllPropertyUseCase(
  getAllPropertyRepository
);

const getAllPropertyController = new GetAllPropertyController(
  getAllPropertyUseCase
);

export { getAllPropertyController, GetAllPropertyUseCase };
