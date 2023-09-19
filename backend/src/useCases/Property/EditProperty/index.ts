import { MongoPropertyRepository } from "../../../repositories/implementations/Property/MongoPropertyRepository";
import { EditPropertyController } from "./EditPropertyController";
import { EditPropertyUseCase } from "./EditPropertyUseCase";

const editPropertyRepository = new MongoPropertyRepository();

const editPropertyUseCase = new EditPropertyUseCase(editPropertyRepository);

const editPropertyController = new EditPropertyController(editPropertyUseCase);

export { editPropertyController, editPropertyUseCase };
