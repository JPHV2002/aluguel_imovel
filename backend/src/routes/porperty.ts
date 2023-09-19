import { Router } from "express";
import { createPropertyController } from "../useCases/Property/CreateProperty";
import { getProeprtyController } from "../useCases/Property/GetProperty";
import { getAllPropertyController } from "../useCases/Property/GetAllProperty";

const propertyApi = Router();

propertyApi.get("/", (req, res) => {
  getAllPropertyController.handle(req, res);
});
propertyApi.get("/:id", (req, res) => {
  getProeprtyController.handle(req, res);
});
propertyApi.post("/", (req, res) => {
  createPropertyController.handle(req, res);
});

export { propertyApi };
