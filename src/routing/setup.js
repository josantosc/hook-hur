const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const resHeaderSetter = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  return next();
};

const createJsonRouter = () => {
  const router = express.Router();

  router.use(cors());
  router.use(resHeaderSetter);
  router.use(bodyparser.json());
  router.use(bodyparser.urlencoded({ extended: false }));

  return router;
};

module.exports = { createJsonRouter };
