import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "./models/User";
import { dbPassword, dbUser } from "./environment";
import { authRouter } from "./routes/auth";



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())
app.use(cookieParser());

app.use("/auth", authRouter)

app.get("/", (req, res) => {
    res.status(200).send("Hello")
})


mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.vlx9dpn.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    app.listen(8080)
    console.log("Conectou ao banco")
}).catch((err) => console.log(err))

