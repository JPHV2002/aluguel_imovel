import mongoose from "mongoose";

const rentSchema = new mongoose.Schema({
  id: String,
  propertyId: String,
  ownerId: String,
  startDate: Number,
  endDate: Number,
});

export const RentMongo = mongoose.model("Rent", rentSchema);
