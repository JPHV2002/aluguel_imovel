import { Router } from "express";
import { createUser, loginUser } from "../controllers/auth";
import { authMiddleware } from "../middlewares/auth";

export const authRouter = Router();

authRouter.post("/register", createUser);
authRouter.post("/login", loginUser);

authRouter.get("/", authMiddleware, (req, res) => {
    console.log(" a");
    res.status(200).send(" a")
})