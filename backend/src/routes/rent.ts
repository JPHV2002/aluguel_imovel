import { Router } from "express";
import { authenticateJWT } from "../middleware/auth";
import { createRenteController } from "../useCases/Rent/CreateRent";
import { getRentByPropertyController } from "../useCases/Rent/GetRentByProperty";

const rentApi = Router();

rentApi.use(authenticateJWT);

rentApi.post("/", (req, res) => {
  createRenteController.handle(req, res);
});

rentApi.get("/:propertyId", (req, res) => {
  getRentByPropertyController.handle(req, res);
});

export { rentApi };
