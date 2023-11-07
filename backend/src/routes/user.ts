import { Router } from "express";
import { createUserController } from "../useCases/User/CreateUser";
import { loginUserController } from "../useCases/User/LoginUser";

import * as jwt from "jsonwebtoken";

const userApi = Router();

userApi.post("/", (req, res) => {
  createUserController.handle(req, res);
});

userApi.post("/login", (req, res) => {
  loginUserController.handle(req, res);
});

userApi.get("/:id", (req, res) => {
  const token = req.params.id;
  res.status(200).json(jwt.decode(token));
});

export { userApi };
