const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

router.get("/", auth, (req, res, next) => {
  // hre put your business logic
  return res.status(200).json({ info: "your response" });
});

module.exports = router;
