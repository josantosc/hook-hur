const { INTENTS } = require("../constantes");
const { SAMPLE } = INTENTS;
const { getSample, postSample } = require("../../services/sample");

const mappedIntents = {};

module.exports = { mappedIntents };
