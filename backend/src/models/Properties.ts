import mongoose from "mongoose";

const propertiesSchema = new mongoose.Schema({
    ownerId: String,
    name: String,
    numRoom: Number,
    numBathroom: Number,
    city: String,
});

export const Properties = mongoose.model("Properties", propertiesSchema);