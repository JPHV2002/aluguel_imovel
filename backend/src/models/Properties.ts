import mongoose from "mongoose";

const propertiesSchema = new mongoose.Schema({
    name: String,
    ownerEmail: String,
    
});

export const Properties = mongoose.model("Properties", propertiesSchema);