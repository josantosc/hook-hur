const { INTENTS } = require("../constantes");
const { SAMPLE } = INTENTS;
const { getSample, postSample } = require("../../services/sample");

const mappedIntents = {
  [SAMPLE.INTENT_GET_FOFOCA]: getSample,
  [SAMPLE.INTENT_POST_FOFOCA]: postSample,
};

module.exports = { mappedIntents };
