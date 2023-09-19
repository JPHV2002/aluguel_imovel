import { Router } from "express";
import { createPropertyController } from "../useCases/Property/CreateProperty";
import { getProeprtyController } from "../useCases/Property/GetProperty";

const propertyApi = Router();

propertyApi.get("/:id", (req, res) => {
  getProeprtyController.handle(req, res);
});
propertyApi.post("/", (req, res) => {
  createPropertyController.handle(req, res);
});

export { propertyApi };
