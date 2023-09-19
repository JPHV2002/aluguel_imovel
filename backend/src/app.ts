import express from "express";
import { userApi } from "./routes/user";
import { propertyApi } from "./routes/porperty";

const app = express();

app.use(express.json());
app.use("/user", userApi);
app.use("/property", propertyApi);

export { app };
