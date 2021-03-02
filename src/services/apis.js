const axios = require("axios");

const educaionalURL = require("./urls/eduacional");

const apiEducacional = axios.create({
  baseURL: educaionalURL,
  timeout: 2000,
  headers: { "Content-Type": "application/json" },
});

module.exports = {
  apiEducacional,
};
