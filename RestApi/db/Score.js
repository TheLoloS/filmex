const mongoose = require("mongoose");

const Rank = new mongoose.Schema(
  {
    username: { type: String, required: true },
    score: { type: String, required: true },
  },
  { collection: "rank" }
);
const model = mongoose.model("Rank", Rank);

module.exports = model;
