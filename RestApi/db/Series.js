const mongoose = require("mongoose");

const SeriesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    pictrueLink: { type: String, required: true },
    videoLink: { type: String, required: true },
    viewCounter: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: String, required: true },
    episode: { any: [{}] },
  },
  { collection: "series" }
);

const model = mongoose.model("SeriesSchema", SeriesSchema);

module.exports = model;
