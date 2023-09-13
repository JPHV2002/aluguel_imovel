import mongoose from "mongoose";

const propertiesSchema = new mongoose.Schema({

});

export const Properties = mongoose.model("Properties", propertiesSchema);