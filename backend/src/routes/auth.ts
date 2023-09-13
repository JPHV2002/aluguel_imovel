import { Router } from "express";
import { User } from "../models/User";

export const authRouter = Router()

authRouter.post("/register", async (req, res) => {
    const {name, email, password, confirmPassword} = req.body;
    const user = new User({
        name: name,
        email: email,
        password: password
    })
    try {
        user.save()
        res.status(200).send("all done")
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})