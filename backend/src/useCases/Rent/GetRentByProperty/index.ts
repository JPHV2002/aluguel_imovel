import { MongoRentRepository } from "../../../repositories/implementations/Rent/MongoRentRepository";
import { GetRentByPropertyUseCase } from "./GetRentByPropertyUseCase";
import { GetRentByPropertyController } from "./GetRenteByPropertyController";

const getRentRepository = new MongoRentRepository();

const getRentByPropertyUseCase = new GetRentByPropertyUseCase(
  getRentRepository
);

const getRentByPropertyController = new GetRentByPropertyController(
  getRentByPropertyUseCase
);

export { getRentByPropertyController, getRentByPropertyUseCase };
