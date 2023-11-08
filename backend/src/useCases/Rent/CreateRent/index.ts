import { MongoRentRepository } from "../../../repositories/implementations/Rent/MongoRentRepository";
import { CreateRenteController } from "./CreateRentController";
import { CreateRentUseCase } from "./CreateRentUseCase";

const createRentRepository = new MongoRentRepository();

const createRenteUseCase = new CreateRentUseCase(createRentRepository);

const createRenteController = new CreateRenteController(createRenteUseCase);

export { createRenteUseCase, createRenteController };
