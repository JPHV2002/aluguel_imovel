import { Router } from "express";
import { User } from "../models/User";
import { createUser } from "../controllers/auth";

export const authRouter = Router()

authRouter.post("/register", createUser);