import { app } from "./app";
import mongoose from "mongoose";
import { dbPassword, dbUser } from "./environment";

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.vlx9dpn.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3333);
    console.log("Conectou ao banco");
  })
  .catch((err) => console.log(err));
