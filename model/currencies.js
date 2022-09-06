const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, unique: true, required: true },
  sellPrice: { type: String, required: true },
  buyPrice: { type: String, required: true },
  createdAt: { type: String, default: new Date() },
});

module.exports = mongoose.model("currencies", userSchema);
