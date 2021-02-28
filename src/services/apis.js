const axios = require("axios");

const sampleUrl = require("./urls/sample");

const apiSample = axios.create({
  baseURL: sampleUrl,
  timeout: 2000,
  headers: { "Content-Type": "application/json" },
});

module.exports = {
  apiSample,
};
