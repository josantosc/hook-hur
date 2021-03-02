const { INTENTS } = require("../constantes");
const { EDUCACIONAL } = INTENTS;
const { getQuestions } = require("../../services/educaional");

const mappedIntents = {
  [EDUCACIONAL.AULAS_8_ANO]: getQuestions,
};

module.exports = { mappedIntents };
