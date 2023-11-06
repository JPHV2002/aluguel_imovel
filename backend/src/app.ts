import express from "express";
import { userApi } from "./routes/user";
import { propertyApi } from "./routes/porperty";
import { rateApi } from "./routes/rate";

const app = express();

app.use(express.json());
app.use("/user", userApi);
app.use("/property", propertyApi);
app.use("/rate", rateApi);

export { app };
