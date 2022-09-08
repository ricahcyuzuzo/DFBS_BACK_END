const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fromCurrency: { type: String, required: true },
  toCurrency: { type: String, required: true },
  amountPaid: { type: String },
  userId: { type: String, required: true },
  amountToGet: { type: String, required: true },
  phoneOrAccount: { type: String, required: true },
  status: { type: String, required: true },
  toAccount: { type: String, required: true },
  createdAt: { type: String, default: new Date() },
});

module.exports = mongoose.model("transactions", userSchema);
