import { Router } from "express";
import { createRateController } from "../useCases/Rate/CreateRate";
import { getRateController } from "../useCases/Rate/GetRate";

const rateApi = Router();

rateApi.post("/", (req, res) => {
  createRateController.handle(req, res);
});

rateApi.get("/:id", (req, res) => {
  getRateController.handle(req, res);
});

export { rateApi };
