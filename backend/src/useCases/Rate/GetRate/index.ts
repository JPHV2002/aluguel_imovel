import { MongoRateRepository } from "../../../repositories/implementations/Rate/MongoRateRepository";
import { GetRateController } from "./GetRateController";
import { GetRateUseCase } from "./GetRateUseCase";

const getRateRepository = new MongoRateRepository();

const getRateUseCase = new GetRateUseCase(getRateRepository);

const getRateController = new GetRateController(getRateUseCase);

export { getRateController, getRateUseCase };
