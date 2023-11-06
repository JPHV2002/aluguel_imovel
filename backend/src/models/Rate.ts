import { string } from "joi";
import mongoose from "mongoose";

const rateSchema = new mongoose.Schema({
  id: String,
  ownerId: String,
  rateNumber: Number,
  comment: String,
  propertyId: String,
});

export const RateMongo = mongoose.model("Rate", rateSchema);
