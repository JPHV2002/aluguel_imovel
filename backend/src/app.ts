import express from "express";
import { userApi } from "./routes/user";
import { propertyApi } from "./routes/porperty";
import { rateApi } from "./routes/rate";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());
app.use("/user", userApi);
app.use("/property", propertyApi);
app.use("/rate", rateApi);

export { app };
