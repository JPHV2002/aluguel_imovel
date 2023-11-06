import { Router } from "express";
import { createPropertyController } from "../useCases/Property/CreateProperty";
import { getProeprtyController } from "../useCases/Property/GetProperty";
import { getAllPropertyController } from "../useCases/Property/GetAllProperty";
import { editPropertyController } from "../useCases/Property/EditProperty";
import { deletePropertyController } from "../useCases/Property/DeleteProperty";
import { authenticateJWT } from "../middleware/auth";

const propertyApi = Router();

propertyApi.use(authenticateJWT);

propertyApi.get("/", (req, res) => {
  getAllPropertyController.handle(req, res);
});
propertyApi.get("/:id", (req, res) => {
  getProeprtyController.handle(req, res);
});
propertyApi.post("/", (req, res) => {
  createPropertyController.handle(req, res);
});
propertyApi.put("/:id", (req, res) => {
  editPropertyController.handle(req, res);
});
propertyApi.delete("/:id", (req, res) => {
  deletePropertyController.handle(req, res);
});

export { propertyApi };
