import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  password: String,
});

export const UserMongo = mongoose.model("User", userSchema);
