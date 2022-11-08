const mongoose = require("mongoose");

const SeriesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    pictrueLink: { type: String, required: true },
    videoLink: { type: String, required: true },
    viewCounter: { type: String, required: true },
  },
  { collection: "series" }
);

const model = mongoose.model("SeriesSchema", SeriesSchema);

module.exports = model;
