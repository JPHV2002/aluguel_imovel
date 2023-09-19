import express from "express";
import { userApi } from "./routes/user";

const app = express();

app.use(express.json());
app.use("/user", userApi);

export { app };
