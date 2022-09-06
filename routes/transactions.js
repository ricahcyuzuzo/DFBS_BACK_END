const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const Transactions = require("../model/transactions");

router.get("/all/", auth, async (req, res) => {
  try {
    const transactions = await Transactions.find({ userId: req.user.user_id });
    return res.status(200).send({ transactions });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = router;
