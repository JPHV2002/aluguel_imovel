import { MongoPropertyRepository } from "../../../repositories/implementations/Property/MongoPropertyRepository";
import { DeletePropertyController } from "./DeletePropertyController";
import { DeletePropertyUseCase } from "./DeletePropertyUseCase";

const deletePropertyRepository = new MongoPropertyRepository();

const deletePropertyUseCase = new DeletePropertyUseCase(
  deletePropertyRepository
);

const deletePropertyController = new DeletePropertyController(
  deletePropertyUseCase
);

export { deletePropertyController, deletePropertyUseCase };
