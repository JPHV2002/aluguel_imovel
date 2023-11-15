import { Router } from "express";
import { createUserController } from "../useCases/User/CreateUser";
import { loginUserController } from "../useCases/User/LoginUser";

import * as jwt from "jsonwebtoken";
import { authenticateJWT } from "../middleware/auth";

const userApi = Router();

userApi.post("/", (req, res) => {
  createUserController.handle(req, res);
});

userApi.post("/login", (req, res) => {
  loginUserController.handle(req, res);
});

userApi.get("/", authenticateJWT, (req: any, res) => {
  res.status(200).json(req.user);
});

export { userApi };
