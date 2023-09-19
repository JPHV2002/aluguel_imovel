import { Router } from "express";
import { createUserController } from "../useCases/User/CreateUser";

const userApi = Router();

userApi.post("/", (req, res) => {
  createUserController.handle(req, res);
});

export { userApi };
