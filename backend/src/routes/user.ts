import { Router } from "express";
import { createUserController } from "../useCases/User/CreateUser";
import { loginUserController } from "../useCases/User/LoginUser";

const userApi = Router();

userApi.post("/", (req, res) => {
  createUserController.handle(req, res);
});

userApi.post("/login", (req, res) => {
  loginUserController.handle(req, res);
});

export { userApi };
