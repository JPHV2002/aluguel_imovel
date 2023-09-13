import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import { createProperties, deletePropertie, getPropertie, listProperties } from "../controllers/properties";

export const propertieRouter = Router();

propertieRouter.get("/", authMiddleware, listProperties);
propertieRouter.get("/:id", authMiddleware, getPropertie);
propertieRouter.post("/", authMiddleware, createProperties);
propertieRouter.delete("/:id", authMiddleware, deletePropertie);