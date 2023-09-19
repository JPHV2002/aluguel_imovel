import { Router } from "express";
import { createPropertyController } from "../useCases/Property/CreateProperty";

const propertyApi = Router();

propertyApi.post("/", (req, res) => {
  createPropertyController.handle(req, res);
});

export { propertyApi };
