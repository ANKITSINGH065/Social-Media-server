import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
  category: {
    type: String,
    require: [true, "Enter A category"],
  },
});

export const Category = mongoose.model("Category", schema);
