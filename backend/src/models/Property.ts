import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  ownerId: String,
  bedrooms: Number,
  bathrooms: Number,
  address: {
    city: String,
    state: String,
    country: String,
  },
});

export const PropertyMongo = mongoose.model("Property", userSchema);
