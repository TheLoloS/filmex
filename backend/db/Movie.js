const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    pictrueLink: { type: String, required: true },
    videoLink: { type: String, required: true },
    viewCounter: { type: String, required: true },
    category: { type: String },
    rating: { type: String },
  },
  { collection: "movie" }
);

const model = mongoose.model("MovieSchema", MovieSchema);

module.exports = model;
